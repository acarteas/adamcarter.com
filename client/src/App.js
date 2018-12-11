import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

//import views
import Calendar from './views/Calendar.js';
import Home from './views/Home.js';
import Publications from './views/Publications.js';
import Projects from './views/Projects.js';

//fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

//System config
import ConfigManager from './config.js';

//add font-awesome stuff to library
library.add(fab, faEnvelope, faHome)

//get system config
var config = ConfigManager.getConfig();

/*
Things to look at / remember

//fonts and styles
https://fontawesome.com/free
https://fontawesome.com/how-to-use/on-the-web/using-with/react
https://www.npmjs.com/package/@fortawesome/react-fontawesome#usage

//bootstrap
https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121
https://getbootstrap.com/docs/4.1/components/navbar/

//react / js stuff
https://www.robinwieruch.de/local-storage-react/
https://www.npmjs.com/package/react-reveal

<Route path="/">
   <Redirect to="/home" />
</Route>
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
                        <li className="nav-item">
                           <Link to="/publications" className="nav-link">Publications</Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/projects" className="nav-link">Projects</Link>
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
            <Route path="/publications" component={PublicationsComponent} />
            <Route exact path="/projects" component={ProjectsComponent} />
            <Route path="/projects/:name" component={ProjectsComponent} />
            <Route exact path="/" component={HomeComponent} />
         </div>
      </Router>
      </div>
    );
  }
}

const CalendarComponent = () =>(
   <div className="container">
      <h1>Calendar Generator</h1>
      <Calendar />
   </div>
);

const HomeComponent = () =>(
   <div className="container">
      <Fade>
         <Home 
            field_endpoint={config.FieldsEndpoint}
            education_endpoint={config.EducationEndpoint}
            work_endpoint={config.WorkHistoryEndpoint}
         />
      </Fade>
   </div>
);

const PublicationsComponent = () =>(
   <div className="container">
   <Fade>
      <Publications publications_endpoint={config.PublicationsEndpoint} />
   </Fade>
   </div>
);

function ProjectsComponent({match}){
   return(
      <div className="container">
      <Fade>
         <Projects projects_endpoint={config.ProjectsEndpoint}
                   project_name={match.params.name}
          />
      </Fade>
      </div>
   );
}

export default App;
