import React, { useState } from 'react';
import { connect } from 'react-redux';
import { playerCommand } from '../actions/gameActions';

const CommandLine = props => {
  const [command, setCommand] = useState({
    command: ''
  });

  const handleChange = e => {
    // TODO: If keycode == 13, call handleSubmit()?
    setCommand({
      ...command,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.playerCommand(command.command);
    setCommand({
      command: ''
    });
  };

  return (
    <div className="command-line">
      <div className="command-form">
        <h2>Your next move...</h2>
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="command">Command:</label>
          <input
            type="text"
            id="command"
            name="command"
            placeholder="Where to next?"
            onChange={handleChange}
            value={command.text}
            required
          />
          <button type="submit">Submit</button>
          <br />
        </form>
      </div>
      <img
        src={require('../assets/dragon.png')}
        alt="Scary dragon"
        height="200px"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // TODO: Placeholder
    // localVar: state.whichReducer.varName,
  };
};

export default connect(mapStateToProps, { playerCommand })(CommandLine);
