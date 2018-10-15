import React, { Component } from 'react';
import Calendar from './views/Calendar.js'
import './styles/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/*
Things to look at / remember
https://fontawesome.com/free
https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121
*/

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
