import React, { Component } from 'react';
import {ArrayIndexSelect, ArrayValueSelect} from './components/Selects.js';
import DataTable from './components/DataTable.js'

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
class Calendar extends Component{
   constructor(props){
      super(props);

      const today = new Date();
      let year_range = [];
      for(let  i = today.getFullYear() - 3; i < today.getFullYear() + 5; i++){
         year_range.push(i);
      }

      this.state = {
         years: year_range,
         selectedMonth: today.getMonth(),
         selectedYear: today.getFullYear(),
         calendar: [[]],
         tableHtml: "blank"
      };

      this.tableRef = React.createRef();

      this.updateYear = this.updateYear.bind(this);
      this.updateMonth = this.updateMonth.bind(this);
      this.updateCalendar = this.updateCalendar.bind(this);
   }

   componentDidMount(){
      this.updateCalendar();
   }

   updateYear(evt){
      this.setState({ selectedYear: evt.target.value }, () => this.updateCalendar());
   }

   updateMonth(evt){
      this.setState({ selectedMonth: evt.target.value}, () => this.updateCalendar());
   }

   updateCalendar(){
      let calendar = [[...DAYS]];
      const beginning = new Date(this.state.selectedYear, this.state.selectedMonth);
      const end = new Date(this.state.selectedYear, beginning.getMonth() + 1, 0);
      let current_week = [];

      //pre-fill any dates prior to the start of the month
      for(let i = 0; i < beginning.getDay(); i++){
         current_week.push("");
      }

      //now, add in all dates for the selected month
      let current_date = beginning;
      let counter = 1;
      while(current_date <= end){
         current_week.push(counter);
         current_date.setDate(current_date.getDate() + 1);
         counter++;
         if(current_week.length === 7){
            calendar.push(current_week);
            current_week = [];
         }
      }

      //fill to make a multiple of 7
      if(current_week.length !== 0)
      {
         while(current_week.length < 7)
         {
            current_week.push("");
         }
         calendar.push(current_week);
      }

      this.setState({calendar: calendar}, 
         
         //update HTML of our calendar based on newly rendered HTML
         () => this.setState({tableHtml: this.tableRef.current.innerHTML}));

   }

   render(){
      const years = this.state.years;
      const selectedMonth = this.state.selectedMonth;
      const selectedYear = this.state.selectedYear;
      const calendar = this.state.calendar;
      const tableRef = this.tableRef;
      const tableHtml = this.state.tableHtml;
      return(
      <div>
         <ArrayIndexSelect 
            data={MONTHS}
            selectedValue={selectedMonth}
            onChange={this.updateMonth}
         />
         <ArrayValueSelect 
            data={years}
            selectedValue={selectedYear}
            onChange={this.updateYear}
         />
         <div>
         <DataTable data={calendar} tableRef={tableRef} />
         </div>
         <article>
            <h1>HTML</h1>
            <textarea cols="80" rows="10" value={tableHtml} readOnly>
            </textarea>
         </article>
      </div>
      );
   }
}

export {Calendar};
export default Calendar;