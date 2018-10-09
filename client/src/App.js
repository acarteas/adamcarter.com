import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ArrayIndexSelect, ArrayValueSelect} from './components/Selects.js';
import DataTable from './components/DataTable.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


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
         calendar: [[]]
      };

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
      this.setState({calendar: calendar});
   }

   render(){
      const years = this.state.years;
      const selectedMonth = this.state.selectedMonth;
      const selectedYear = this.state.selectedYear;
      const calendar = this.state.calendar;
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
         <DataTable data={calendar} />
         </div>
      </div>
      );
   }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
         <div>
            <nav>
               <Link to="/calendar_generator">Calendar Generator</Link>
            </nav>
            <Route path="/calendar_generator" component={CalendarComponent} />
         </div>
      </Router>
      </div>
    );
  }
}

const CalendarComponent = () =>(
   <div>
      <h1>Calendar Generator</h1>
      <Calendar />
   </div>
);

export default App;
