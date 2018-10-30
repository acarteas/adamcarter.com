import React, { Component } from 'react';
import axios from 'axios';
var showdown = require('showdown');

class Projects extends Component{
   constructor(props){
      super(props);

      this.state = {
         project_html: "",
      };
      this.fetchProject = this.fetchProject.bind(this);
   }
   componentDidMount(){
      this.fetchProject();
   }

   fetchProject(){
      const projects_endpoint = this.props.projects_endpoint;
      const fetch_url = projects_endpoint + this.props.project_name;
      var converter = new showdown.Converter();
      axios(fetch_url).then(result => 
         {
            let data = result.data.response;
            data = converter.makeHtml(data);
            this.setState({project_html: data});
      });
   }

   render(){
      return(
         <section className="row" dangerouslySetInnerHTML={{__html: this.state.project_html}}>
         </section>
      );
   }
}

export {Projects};
export default Projects;