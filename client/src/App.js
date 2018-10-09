import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Calendar extends Component{
   constructor(props){
      super(props);

      let today = new Date();
      let year_range = [];
      for(let  i = today.getFullYear() - 3; i < today.getFullYear() + 5; i++){
         year_range.push(i);
      }

      this.state = {
         years: year_range,
         selectedMonth: today.getMonth(),
         selectedYear: today.getYear(),
      };
   }

   render(){
      return(
      <div>
         <select>
            {MONTHS.map( (month) =>
               <option value="{index}">{month}</option>
            )}
            
         </select>
      </div>
      );
   }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;
