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
         field_url: "http://localhost:8080/api/fields/"
      };

      //set default server endpoints if not provided
      //const {field_url, education_url, expertise_url, work_url} = this.props;

      this.fetchData = this.fetchData.bind(this);
   }

   componentDidMount(){
      this.fetchData();
   }

   fetchData(){
      const field_url = this.state.field_url;
      const fields = ['name', 'picture_self', 'job_title', 'location', 'email_address', 'about_myself'];
      for(const field of fields){
         const endpoint = field_url + field;
         axios(endpoint).then(result => {
            const data = result.data.data;
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
      return(
         <section>
            <article>
               <img src={picture_self} title="Me!" alt="Me!" />
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
               <div dangerouslySetInnerHTML={{__html: about}}>
               </div>
            </article>
         </section>
      );
   }
}

export {Home};
export default Home;