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

const Game = props => {

  useEffect(() => {
    props.initiateGame();
  }, []);

  return (
    <div className="game">
      <div className="header">
        <h1>Lambda-MUD</h1>
        <NavBar />
      </div>

      <div className="main-content">
        <h1>The intrepid adventurer: {props.initData.name}</h1>
        <div className="main-row">
          <RoomInfo
            roomName={props.initData.title}
            roomDesc={props.initData.description}
          />
          <Map
            currentRoomNum={props.initData.curr_room}
            currentX={props.initData.x_coord}
            currentY={props.initData.y_coord} 
          />
          <PlayerList playersArray={props.initData.players}/>
        </div>
        <CommandLine />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    initData: state.gameReducer.initData
  };
};

export default connect(mapStateToProps, { initiateGame })(Game);
