import React, { Component } from 'react';

class ArrayIndexSelect extends Component{

   render(){
      const {data, selectedValue, onChange} = this.props;
      return(
         <select value={selectedValue} onChange={onChange}>
            {data.map( (value, index) =>
               <option key={index} value={index}>{value}</option>
      )}
         </select>
      );
   }
}

class ArrayValueSelect extends Component{

   render(){
      const {data, selectedValue, onChange} = this.props;
      return(
         <select value={selectedValue} onChange={onChange}>
            {data.map( (value) =>
               <option key={value} value={value}>{value}</option>
      )}
         </select>
      );
   }
}

export {ArrayIndexSelect, ArrayValueSelect};