import React, { Component } from 'react';

class DateList extends Component{

   render(){

      const {data, date_key, h1_key, h2_key, h3_key, details_key} = this.props;
      return(
         <ul>
            {data.map( (item) =>
               <li key={item.id} className="workItem row">
                  <div className="col-sm-3 align-self-start">
                     <h4>
                        {item[date_key]}
                     </h4>
                  </div>
                  <div className="col-sm">
                  <h1>{item[h1_key]}</h1>
                     <h2>{item[h2_key]}</h2>
                     <h3>{item[h3_key]}</h3>
                     <p>
                        {item[details_key]}
                     </p>
                  </div>
               </li>
            )}  
         </ul>
      );
   }
}

export {DateList};
export default DateList;