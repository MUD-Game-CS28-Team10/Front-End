/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Title, Content } from '../styledComponents/styles';

const RoomInfo = props => {
  const { roomName, roomDesc, initX, initY, initRoomNum } = props;

  return (
    <div className="room-info">
      <Title>{roomName}</Title>
      <Content>
        Room {initRoomNum}: ({initX}, {initY})
      </Content>
      <Content>{roomDesc}</Content>
    </div>
  );
};

export default RoomInfo;
