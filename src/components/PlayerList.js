/* eslint-disable react/prop-types */
import React from 'react';
import { Title, Content } from '../styledComponents/styles';

const PlayerList = (props) => {
  // const { playersArray } = props;

  console.log('PlayersArray', props.playersArray);

  return (
    <div className="player-list">
      <Title>Player List</Title>
      {props.playersArray && props.playersArray.map(player => (
        <Content>{player}</Content>
      ))}
    </div>
  );
};

export default PlayerList;
