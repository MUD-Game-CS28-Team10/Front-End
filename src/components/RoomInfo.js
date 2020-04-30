/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const RoomInfo = props => {
  const { roomName, roomDesc } = props;

  return (
    <div className="room-info">
      <h2>Room</h2>
      <h3>You are currently in the {roomName}.</h3>
      <h3>As you look around you see: {roomDesc}</h3>
    </div>
  );
};

export default RoomInfo;
