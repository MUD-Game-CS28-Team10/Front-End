/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Title, Content } from '../styledComponents/styles';

const RoomInfo = props => {
  const { roomName, roomDesc } = props;

  return (
    <div className="room-info">
      <Title>Room</Title>
      <Content>You are currently in the {roomName}.</Content>
      <Content>As you look around you see: </Content>
      <Content>{roomDesc}</Content>
    </div>
  );
};

export default RoomInfo;