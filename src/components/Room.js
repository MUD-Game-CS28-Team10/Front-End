import React from 'react';
import styled from 'styled-components';

const Room = ({
  n_to,
  e_to,
  s_to,
  w_to,
  occupied_rooms,
  id
  }) => {

  
  return (
    <RoomContainer>
      {id}
    </RoomContainer>
  );
};

export default Room

const RoomContainer = styled.div`
  position: relative;
`;
