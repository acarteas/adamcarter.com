import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

//import views
import Calendar from './views/Calendar.js';
import Home from './views/Home.js';

/*
Things to look at / remember

//fonts and styles
https://fontawesome.com/free

//bootstrap
https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121
https://getbootstrap.com/docs/4.1/components/navbar/

//react / js stuff
https://www.robinwieruch.de/local-storage-react/
https://www.npmjs.com/package/react-reveal
*/

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
         <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
               <Link to="/home" className="navbar-brand">Adam Carter</Link>
               <button 
                  className="navbar-toggler" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarNav" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                  >
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" 
                              href="#top" id="navbarDropdown" 
                              role="button" 
                              data-toggle="dropdown" 
                              aria-haspopup="true" 
                              aria-expanded="false">
                              Tools
                           </a>
                           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <Link to="/calendar_generator" className="dropdown-item">Calendar Generator</Link>
                           </div>
                        </li>
                     </ul>
                  </div>
            </nav>
            <Route path="/calendar_generator" component={CalendarComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/">
               <Redirect to="/home" />
            </Route>
            
         </div>
      </Router>
      </div>
    );
  }
}

const CalendarComponent = () =>(
   <div className="container-fluid">
      <h1>Calendar Generator</h1>
      <Calendar />
   </div>
);

const HomeComponent = () =>(
   <div className="container-fluid">
      <Fade>
         <Home />
      </Fade>
   </div>
);

export default App;
