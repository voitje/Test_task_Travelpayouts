import React from 'react';
import '../style/UserData.css'

export default ({ firm}) => {
  return (
      /*<tr>
        <td>{firm.title}</td>
        <td>{firm.description}</td>
        <td>{firm.link}</td>
      </tr>*/
      <div className='firm'>
        <div className='firmName'>
        {firm.title}
        </div>
      </div>
  );
};