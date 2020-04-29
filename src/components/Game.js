import React from 'react';
import NavBar from './NavBar';
import RoomInfo from './RoomInfo';
import Map from './Map';
import PlayerList from './PlayerList';
import CommandLine from './CommandLine';

const Game = (props) => {
  return (
    <>
      <div className="header">
        <div className="header">
          <h1>This is the header. Check out the nav bar</h1>
          <NavBar />
        </div>
      </div>

      <div className="main-content">
        <h1>This is the main-content div</h1>
        <RoomInfo />
        <Map />
        <PlayerList />
        <CommandLine />
      </div>
    </>
  );
};

export default Game;
