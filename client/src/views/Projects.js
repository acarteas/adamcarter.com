import React, { Component } from 'react';
import '../styles/projects.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import SessionManager from '../SessionManager.js';

var showdown = require('showdown');
const classMap = {
   img: 'img-fluid'
 }
 
 const bindings = Object.keys(classMap)
   .map(key => ({
     type: 'output',
     regex: new RegExp(`<${key}(.*)>`, 'g'),
     replace: `<${key} class="${classMap[key]}" $1>`
   }));
 
 const conv = new showdown.Converter({
   extensions: [...bindings]
 });

class Projects extends Component{
   constructor(props){
      super(props);

      this.session_manager = new SessionManager();

      this.state = {
         project_html: "",
         all_projects: {}
      };
      this.fetchAllProjects = this.fetchAllProjects.bind(this);
      this.fetchProject = this.fetchProject.bind(this);
   }
   componentDidMount(){
      if(this.props.project_name === undefined){
         this.fetchAllProjects();
      }
      else{
         this.fetchProject();
      }
   }

   fetchAllProjects(){
      const projects_endpoint = this.props.projects_endpoint;
      this.session_manager.makeUrlRequest(projects_endpoint, result => 
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
      const fetch_url = projects_endpoint + "/" + this.props.project_name;
      this.session_manager.makeUrlRequest(fetch_url, result => 
         {
            let data = result.data.response;
            data = conv.makeHtml(data);
            this.setState({project_html: data});
      });
   }

   renderSingle(){
      const html = this.state.project_html;
      return(
         <section className="row">
            <div className="col" dangerouslySetInnerHTML={{__html: html}}>
            </div>
         </section>
      );
   }

   renderList(){
      const projects = this.state.all_projects;
      return(
         <section className="row">
            <div className="col">
                     {Object.keys(projects).map( (key, value) => {
                        let section = projects[key];
                        return(
                        <article key={key} className="category">
                           <h1>{section.category}</h1>
                              {section.projects.map(project =>{
                                 const project_url = "/projects/" + project.keyword;
                                 const img_css = (project.image_url === "") ? "noShow" : "col-sm";
                                 return(
                                    <article key={project.id} className="project">
                                       <h1>{project.title}</h1>
                                       <div className="row">
                                          <div className={img_css}>
                                             <img className="smallImage img-fluid" src={project.image_url} alt={project.title} title={project.title} />
                                          </div>
                                       <p className="col-sm-8">
                                          {project.blurb} <Link to={project_url}>Read More</Link>
                                       </p>
                                       </div>
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