import '../styles/home.css';
import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{
   constructor(props){
      super(props);

      this.state = {
         name: "",
         job_title: "",
         location: "",
         email_address: "",
         about_myself: "",
         work_history: [],
         education_history: [],
      };

      //set default server endpoints if not provided
      //const {field_url, education_url, expertise_url, work_url} = this.props;

      this.fetchFieldData = this.fetchFieldData.bind(this);
      this.fetchWorkHistory = this.fetchWorkHistory.bind(this);
      this.fetchEmploymentHistory = this.fetchEmploymentHistory.bind(this);

      //make calls to server
      this.fetchFieldData();
      this.fetchWorkHistory();
   }

   componentDidMount(){
      
   }

   fetchWorkHistory(){
      const work_endpoint = this.props.work_endpoint;
      axios(work_endpoint).then(result => 
         {this.setState({work_history: result.data.response})
      });
   }

   fetchEmploymentHistory(){
      const education_endpoint = this.props.education_endpoint;
      axios(education_endpoint).then(result => {this.setState({education_history: result.data.response})});
   }

   fetchFieldData(){
      const field_url = this.props.field_endpoint;
      const fields = ['name', 'picture_self', 'job_title', 'location', 'email_address', 'about_myself'];
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
      const location = this.state.location;
      const email_address = this.state.email_address;
      const about = this.state.about_myself;
      const picture_self = this.state.picture_self;
      const work_history = this.state.work_history;
      return(
         <section>
            <article className="row">
                  <div className="col-lg align-self-start">
                     <img id="selfPicture" className="img-fluid" src={picture_self} title="Me!" alt="Me!" />
                  </div>
                  <div className="col-lg">
                     <h1>{name}</h1>
                     <h2>{job_title}</h2>
                     <ul>
                        <li>{location}</li>
                        <li>{email_address}</li>
                     </ul>
                     <ul>
                        <li>Linked In</li>
                        <li>Github</li>
                     </ul>
                     <h3>About Myself</h3>
                     <div dangerouslySetInnerHTML={{__html: about}}></div>
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
                     <div className="col align-self-start">
                        <h4>
                        {start_date.getFullYear()} - {item.end_date === null ? "present" : end_date.getFullYear()}
                        </h4>
                     </div>
                     <div className="col align-self-center circle">
                        <span className="circle">
                        </span>
                     </div>
                     <div className="col">
                     <h1 key={item.id}>{item.business_name}</h1>
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
            </article>
         </section>
      );
   }
}

export {Home};
export default Home;