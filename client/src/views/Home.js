import '../styles/home.css';
import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component{
   constructor(props){
      super(props);

      this.state = {
         name: "",
         job_title: "",
         location: "",
         email_address: "",
         about_myself: "",
         github_url: "",
         linkedin_url: "",
         work_history: [],
         education_history: [],
      };

      this.fetchFieldData = this.fetchFieldData.bind(this);
      this.fetchWorkHistory = this.fetchWorkHistory.bind(this);
      this.fetchEducationHistory = this.fetchEducationHistory.bind(this);

      //make calls to server
      this.fetchFieldData();
      this.fetchWorkHistory();
      this.fetchEducationHistory();
   }

   componentDidMount(){
      
   }

   fetchWorkHistory(){
      const work_endpoint = this.props.work_endpoint;
      axios(work_endpoint).then(result => 
         {
            let data = result.data.response;
            for(let item of data){
               const start_date = new Date(item.start_date);
               const end_date = new Date(item.end_date);
               let date_range = start_date.getFullYear();
               date_range += (item.end_date === null ? "present" : end_date.getFullYear());
               item.date_range = date_range;
            }
            this.setState({work_history: result.data.response});
      });
   }

   fetchEducationHistory(){
      const education_endpoint = this.props.education_endpoint;
      axios(education_endpoint).then(result => {this.setState({education_history: result.data.response})});
   }

   fetchFieldData(){
      const field_url = this.props.field_endpoint;
      const fields = ['name', 'picture_self', 'job_title', 'location', 'email_address', 'about_myself', 'github_url', 'linkedin_url'];
      for(const field of fields){
         const endpoint = field_url + field;
         axios(endpoint).then(result => {
            const data = result.data.response;
            const key = data.field_name;
            const value = data.field_value;
            this.setState({[key]: value});
         });
      }
   }

   render(){
      const name = this.state.name;
      const job_title = this.state.job_title;
      const education_history = this.state.education_history;
      const email_address = this.state.email_address;
      const about = this.state.about_myself;
      const picture_self = this.state.picture_self;
      const work_history = this.state.work_history;
      const github_url = this.state.github_url;
      const linkedin_url = this.state.linkedin_url;
      return(
         <section>
            <article className="row">
                  <div className="col-lg align-self-start">
                     <img id="selfPicture" className="img-fluid" src={picture_self} title="Me!" alt="Me!" />
                  </div>
                  <div className="col-lg container-full">
                     <div className="row">
                        <div className="col">
                           <h1>{name}</h1>
                           <h2>{job_title}</h2>
                        </div>
                     </div>
                     <ul className="row faLinks">
                        <li className="col-sm justify-content-center">
                           <a href={linkedin_url} className="faIcon">
                              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"  />
                           </a>
                        </li>
                        <li className="col-sm justify-content-center">
                              <a href={github_url} className="faIcon">
                                 <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                              </a>
                        </li>
                        <li className="col-sm justify-content-center">
                              <a href={"mailto:" + email_address} className="faIcon">
                                 <FontAwesomeIcon icon="envelope" size="2x" />
                              </a>
                        </li>
                     </ul>
                     <div className="row">
                        <div className="col">
                           <h3>About Myself</h3>
                           <div dangerouslySetInnerHTML={{__html: about}}></div>
                        </div>
                     </div>
                  </div>
            </article>
            <article className="row">
               <div className="col">
                  <h1>Employment</h1>
                  <ul>
                  {work_history.map(item => {
                     const start_date = new Date(item.start_date);
                     const end_date = new Date(item.end_date);
                     return(
                     <li key={item.id} className="workItem row">
                     <div className="col-sm-3 align-self-start">
                        <h4>
                        {start_date.getFullYear()} - {item.end_date === null ? "present" : end_date.getFullYear()}
                        </h4>
                     </div>
                     <div className="col-sm">
                     <h1>{item.business_name}</h1>
                        <h2>{item.job_title}</h2>
                        <h3>{item.location}</h3>
                        <p>
                           {item.job_description}
                        </p>
                     </div>
                     </li>
                     )
                  })}
                  </ul>
               </div>
               <div className="col">
                  <h1>Education</h1>
                  <ul>
                  {education_history.map(item => {
                     return(
                     <li key={item.id} className="workItem row">
                     <div className="col-sm-2 align-self-start">
                        <h4>
                        {item.graduation_year}
                        </h4>
                     </div>
                     <div className="col-sm">
                     <h1>{item.school_name}</h1>
                        <h2>{item.major}</h2>
                        <h3>{item.location}</h3>
                     </div>
                     </li>
                     )
                  })}
                  </ul>
               </div>
            </article>
         </section>
      );
   }
}

export {Home};
export default Home;