/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// import { Title, Content } from '../styledComponents/styles';

const RoomInfo = props => {
  const { roomName, roomDesc } = props;

  return (
    <div className="room-info">
      <h2>{roomName}</h2>
      <p>{roomDesc}</p>
    </div>
  );
};

export default RoomInfo;
