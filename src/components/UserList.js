import React from 'react';
import UserData from './UserData';

export default ({ data}) => {
  const firms = data.map((firm) => {
    return (<UserData firm={firm}/>);
  });
  return (
      <div>
        {firms}
      </div>
  );
};