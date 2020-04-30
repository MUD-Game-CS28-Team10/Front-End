/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import { playerMove } from '../actions/gameActions';
import styled from 'styled-components';

const JoyStick = (props) => {

  // const handleMove = async choice => {
    // const getChoice = choice => {
    //   switch(choice) {
    //     case 'n':
    //       return currentRoom.n_to;
    //     case 'e':
    //       return currentRoom.e_to;
    //     case 's':
    //       return currentRoom.s_to;
    //     case 'w':
    //       return currentRoom.w_to;
    //     default:
    //       return null
    //   }
    // }
  // }

  const handleNorth = () => {
    props.playerMove({'direction': 'n'})
  };

  const handleWest = () => {
    props.playerMove({'direction': 'w'})
  }

  const handleEast = () => {
    props.playerMove({'direction': 'e'})
  }

  const handleSouth = () => {
    props.playerMove({'direction': 's'})
  } 

  return (
    <div className='joystick'>
      <FirstRow className='first_row'>
        <ArrowButton className='up-button' onClick={() => handleNorth()}>
          <img
            className='up-arrow'
            src={require('../assets/uparrow.png')}
            alt='up-arrow'
          />
        </ArrowButton>
      </FirstRow>
      <SecondRow className='second_row'>
        <ArrowButton className='left-button' onClick={() => handleWest()}>
          <img
            className='left-arrow'
            src={require('../assets/leftarrow.png')}
            alt='left-arrow'
          />
        </ArrowButton>
        <ArrowButton className='right-button' onClick={() => handleEast()}>
          <img
            className='right-arrow'
            src={require('../assets/rightarrow.png')}
            alt='right-arrow'
          />
        </ArrowButton>
      </SecondRow>
      <ThirdRow className='third_row'>
        <ArrowButton className='down-button' onClick={() => handleSouth()} >
          <img
            className='down-arrow'
            src={require('../assets/downarrow.png')}
            alt='down-arrow'
          />
        </ArrowButton>
      </ThirdRow>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newRoomData: state.gameReducer.newRoomData
  };
};

export default connect(mapStateToProps, { playerMove })(JoyStick);

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ThirdRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const ArrowButton = styled.button`
  display: flex;
  height: 64px;
  width: 64px;
  background: black;
  justify-content: center;
  border: 1px solid black;
`