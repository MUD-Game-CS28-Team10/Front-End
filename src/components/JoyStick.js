/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';

const JoyStick = (props) => {


  
  return (
    <div className='joystick'>
      <FirstRow className='first_row'>
        <ArrowButton className='up-button'>
          <img
            className='up-arrow'
            src={require('../assets/uparrow.png')}
            alt='up-arrow'
          />
        </ArrowButton>
      </FirstRow>
      <SecondRow className='second_row'>
        <ArrowButton className='left-button'>
          <img
            className='left-arrow'
            src={require('../assets/leftarrow.png')}
            alt='left-arrow'
          />
        </ArrowButton>
        <ArrowButton className='right-button'>
          <img
            className='right-arrow'
            src={require('../assets/rightarrow.png')}
            alt='right-arrow'
          />
        </ArrowButton>
      </SecondRow>
      <ThirdRow className='third_row'>
        <ArrowButton className='down-button'>
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

export default JoyStick;

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