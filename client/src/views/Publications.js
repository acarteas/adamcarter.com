import React, { Component } from 'react';
import '../styles/publications.css';
import SessionManager from '../SessionManager.js';

class Publications extends Component{
   constructor(props){
      super(props);

      this.session_manager = new SessionManager();

      this.state = {
         publications: {},
      };
      this.fetchPublications = this.fetchPublications.bind(this);
   }
   componentDidMount(){
      this.fetchPublications();
   }

   fetchPublications(){
      const publications_endpoint = this.props.publications_endpoint;
      this.session_manager.makeUrlRequest(publications_endpoint, result => 
         {
            //the data comes out flat, we need to make it hierarchical based on sort order
            const data = result.data.response;
            let formatted_data = {};
            for(let item of data){
               if(formatted_data[item.sort_order] === undefined){
                  formatted_data[item.sort_order] = {title: item.type, articles: []};
               }
               formatted_data[item.sort_order].articles.push(item);
            }
            this.setState({publications: formatted_data});
      });
   }

   render(){
      const publications = this.state.publications;
      let row_counter = 1;
      return(
         <section className="row">
            <div className="col">
               <h1>Publications</h1>
                     {Object.keys(publications).map( (key, value) => {
                        let section = publications[key];
                        return(
                        <article key={key} className="pubSection">
                           <h1>{section.title}</h1>
                           <ul className="pubList">
                              {section.articles.map(article =>{
                                 let listCss = "listColor1";
                                 if(row_counter % 2 === 0){
                                    listCss = "listColor2";
                                 }
                                 row_counter++;
                                 return(
                                    <li className={listCss} key={article.id}>{article.citation}</li>
                                 )
                              })}
                           </ul>
                        </article>
                        )
                     })}
            </div>
         </section>
      );
   }
}

export {Publications};
export default Publications;