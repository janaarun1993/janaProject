import React from 'react';
import "./CardTable.css"

function CardTable(props) {
  return (
    <div className="card">
      <table>
          <thead>
              <tr>
                  <th>{props.Sno}</th>
                  <th>{props.Name}</th>
                  <th>{props.City}</th>
              </tr>
          </thead>  
          <tbody>
              <tr>
                  <td>{props.sdata}</td>
                  <td>{props.sName}</td>
                  <td>{props.sCity}</td>
              </tr>
          </tbody>        
      </table>
    </div>
  );
}

export default CardTable;