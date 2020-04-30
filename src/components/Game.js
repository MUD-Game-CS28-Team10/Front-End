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
        <h1>This is the main-content div</h1>
        <div className="main-row">
          <RoomInfo />
          <Map />
          <PlayerList />
        </div>
        <CommandLine />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, { initiateGame })(Game);
