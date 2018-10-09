import React, { Component } from 'react';

class DataTable extends Component{

   render(){
      const {data, tableStyle, rowStyle, cellStyle} = this.props;
      return(
         <table className={tableStyle}>
            <tbody>
               {data.map( (row, index) =>
                  <tr key={index} className={rowStyle}>
                     {row.map((cell, sub_index) =>
                     <td key={sub_index} className={cellStyle}>{cell}</td>
                        )}
                  </tr>
               )}
            </tbody>   
         </table>
      );
   }
}

export {DataTable};
export default DataTable;