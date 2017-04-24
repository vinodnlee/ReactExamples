//TabelRow
import React from 'react';

export default class TableRow extends React.Component {
   render() {
      console.log("rendering TableRow Component");
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}