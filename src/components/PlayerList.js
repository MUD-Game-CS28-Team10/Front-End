/* eslint-disable react/prop-types */
import React from 'react';
import { Title, Content } from '../styledComponents/styles';

const PlayerList = (props) => {
  // const { playersArray } = props;

  console.log('PlayersArray', props.playersArray);

  return (
    <div className="player-list">
      <h2>Player List</h2>
      {props.playersArray && props.playersArray.map(player => (
        <p>{player}</p>
      ))}
    </div>
  );
};

export default PlayerList;
