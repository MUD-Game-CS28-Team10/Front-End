/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMap } from '../actions/gameActions';
import Room from './Room';

const Map = props => {
  const { initRoomNum, initX, initY } = props;

  console.log('InitX, InitY', initX, initY);

  useEffect(() => {
    props.getMap();
  }, [props.newRoomData]);

  const [coords, setCoords] = useState({
    x_min: 0,
    x_max: 4,
    y_min: 0,
    y_max: 4
  });
  const [visibleRooms, setVisibleRooms] = useState([]);

  useEffect(() => {
    let x_min = Math.floor(initX / 5) * 5;
    let y_min = Math.floor(initY / 5) * 5;
    if (x_min !== coords.x_min || y_min !== coords.y_min) {
      setCoords({ x_min, x_max: x_min + 4, y_min, y_max: y_min + 4 });
    }
  }, [initX, initY, coords.x_min, coords.y_min]);

  useEffect(() => {
    if (props.roomsArray) {
      let filtered = props.roomsArray.filter(room => {
        if (room.x_coord >= coords.x_min && room.x_coord <= coords.x_max) {
          if (room.y_coord >= coords.y_min && room.y_coord <= coords.y_max) {
            return room;
          }
        }
      });
      setVisibleRooms(filtered);
    }
  }, [coords, props.roomsArray]);

  return (
    <div className='map'>
      <StyledMap>
        {visibleRooms.map(room => (
          <Room {...room} key={`${room.x_coord} + ${room.y_coord}`} currRoom={props.initData.curr_room}/>
        ))}
      </StyledMap>
    </div>
  );
};

const StyledMap = styled.div`
  width: 640px;
  height: 640px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
`;

const mapStateToProps = state => {
  return {
    initData: state.gameReducer.initData,
    newRoomData: state.gameReducer.newRoomData,
    mapData: state.gameReducer.mapData,
    roomsArray: state.gameReducer.mapData.rooms
  };
};

export default connect(mapStateToProps, { getMap })(Map);
