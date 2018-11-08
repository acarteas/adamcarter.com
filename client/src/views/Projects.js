import React, { Component } from 'react';
import axios from 'axios';
import '../styles/projects.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

var showdown = require('showdown');

class Projects extends Component{
   constructor(props){
      super(props);

      this.state = {
         project_html: "",
         all_projects: {}
      };
      this.fetchAllProjects = this.fetchAllProjects.bind(this);
      this.fetchProject = this.fetchProject.bind(this);
   }
   componentDidMount(){
      this.fetchAllProjects();
   }

   fetchAllProjects(){
      const projects_endpoint = this.props.projects_endpoint;
      axios(projects_endpoint).then(result => 
         {
            //the data comes out flat, we need to make it hierarchical based on sort order
            const data = result.data.response;
            let formatted_data = {};
            for(let item of data){
               if(formatted_data[item.category] === undefined){
                  formatted_data[item.category] = {category: item.category, projects: []};
               }
               formatted_data[item.category].projects.push(item);
            }
            this.setState({all_projects: formatted_data});
      });
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

   renderSingle(){
      return(
         <section className="row" >
         Single
         </section>
      );
   }

   renderList(){
      const projects = this.state.all_projects;
      return(
         <section className="row">
            <div className="col">
               <h1>Projects</h1>
                     {Object.keys(projects).map( (key, value) => {
                        let section = projects[key];
                        return(
                        <article key={key} className="category">
                           <h1>{section.category}</h1>
                              {section.projects.map(project =>{
                                 const project_url = "/projects/" + project.keyword;
                                 return(
                                    <article key={project.id} className="project">
                                       <h1>{project.title}</h1>
                                       <img src={project.image_url} alt={project.title} title={project.title} />
                                       <p>
                                          {project.blurb}
                                          <Link to={project_url}>Read More</Link>
                                       </p>
                                    </article>
                                 )
                              })}
                        </article>
                        )
                     })}
            </div>
         </section>
      );
   }

   render(){
      const single_project_html = this.state.project_html;
      return(
         <div>
            {
            single_project_html === "" 
            ? this.renderList() 
            : this.renderSingle()
         }
         </div>
      );
   }
}

export {Projects};
export default Projects;