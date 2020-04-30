/* eslint-disable react/prop-types */
import React from 'react';

const PlayerList = props => {
  const { playersArray } = props;

  console.log('PlayersArray', playersArray)

  return (
    <div className="player-list">
      <h2>Player List</h2>
      {/* {playersArray.map(player => (
        <h4>{player}</h4>
      ))} */}
    </div>
  );
};

export default PlayerList;
