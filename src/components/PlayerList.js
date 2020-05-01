/* eslint-disable react/prop-types */
import React from 'react';
import { Title, Content } from '../styledComponents/styles';

const PlayerList = (props) => {
  const { playersArray } = props;

  console.log('PlayersArray', playersArray);

  return (
    <div className="player-list">
      <Title>Player List</Title>
      {/* {playersArray.map(player => (
        <h4>{player}</h4>
      ))} */}
    </div>
  );
};

export default PlayerList;
