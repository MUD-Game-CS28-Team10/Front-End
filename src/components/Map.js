import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMap } from '../actions/gameActions';

const Map = (props) => {

  const { initRoomNum, initX, initY } = props;

  console.log("MAPDATA", props.mapData)

  useEffect(() => {
    props.getMap();
  }, [props.newRoomData]);

  console.log('roomsArray', props.roomsArray)

  // useEffect(() => {
  //   const nodes = []
  //   props.roomsArray.forEach(room => {
  //     nodes.push({ x: room.x_coord * 4, y: room.y_coord * 4 });
  //   })

  //   console.log("NODES", nodes)

  // }, [props.roomsArray]);

  return (
    <div className="map">
      <h1>Game Map</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    initData: state.gameReducer.initData,
    newRoomData: state.gameReducer.newRoomData,
    mapData: state.gameReducer.mapData,
    roomsArray: state.gameReducer.mapData.rooms
  };
};

export default connect(mapStateToProps, { getMap })(Map);
