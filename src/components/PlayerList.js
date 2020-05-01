/* eslint-disable react/prop-types */
import React from 'react';

const PlayerList = (props) => {
  const { playersArray } = props;

  return (
    <div className="player-list">
      <h2>Player List</h2>
      {playersArray && playersArray.map(player => (
        <p>{player}</p>
      ))}
    </div>
  );
};

export default PlayerList;
