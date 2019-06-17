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
        <div className='description'>Описание</div>
        </div>
        <div>
          <div className='textCode'>ПРОМОКОД</div>
          <input
              className='copyBoard'
              readOnly='readOnly'
              placeholder='Travelpayouts'
              onClick={() => {navigator.clipboard.writeText(firm.link)}}/>
        </div>
        <button className='bonus'>Получить бонус</button>
      </div>
  );
};