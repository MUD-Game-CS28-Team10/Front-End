import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initiateGame } from '../actions/gameActions';

const Game = (props) => {
  useEffect(() => {
    props.initiateGame();
  }, []);

  return (
    <div>
      <h4>Test</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { initiateGame })(Game);
