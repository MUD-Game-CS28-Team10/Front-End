import React from 'react';
import classNames from 'classnames';

const Room = ({
  n_to,
  e_to,
  s_to,
  w_to,
  id,
  x_coord,
  y_coord,
  currRoom
  }) => {


// <div className={`room ${n_to?"north":""} ${s_to?"south":""} ${w_to?"west":""} ${e_to?"east":""}`}
  
  return (
    <div
      className={classNames({
        room: true,
        north: n_to ? false : true,
        south: s_to ? false : true,
        west: w_to ? false : true,
        east: e_to ? false : true,
      })}    
    >
      <div className="player"><h1>{id === currRoom ? "🧙‍♂️" : ""}</h1></div>
      
    </div>
  );
};

export default Room;
