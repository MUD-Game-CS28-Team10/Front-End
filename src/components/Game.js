/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initiateGame } from '../actions/gameActions';
import NavBar from './NavBar';
import RoomInfo from './RoomInfo';
import Map from './Map';
import PlayerList from './PlayerList';
import CommandLine from './CommandLine';
import JoyStick from './JoyStick';

const Game = props => {

  useEffect(() => {
    props.initiateGame();
  }, [props.newRoomData]);

  console.log("CurrentRoom", props.initData.curr_room)

  return (
    <div className="game">
      <div className="header">
        <h1>Lambda-MUD</h1>
        <NavBar player={props.initData.name}/>
      </div>

      <div className="main-content">
        <div className="main-row">
          <RoomInfo
            roomName={props.initData.title}
            roomDesc={props.initData.description}
          />
          <Map
            initRoomNum={props.initData.curr_room}
            initX={props.initData.x_coord}
            initY={props.initData.y_coord} 
          />
          <PlayerList playersArray={props.initData.players}/>
        </div>
        <div className="bottom-row">
        <JoyStick />
        <CommandLine />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    initData: state.gameReducer.initData,
    newRoomData: state.gameReducer.newRoomData
  };
};

export default connect(mapStateToProps, { initiateGame })(Game);
