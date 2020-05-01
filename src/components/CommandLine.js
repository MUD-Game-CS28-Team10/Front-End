import React, { useState } from 'react';
import { connect } from 'react-redux';
import { playerCommand } from '../actions/gameActions';

const CommandLine = (props) => {
  console.log('COMMAND LINE PROPS', props);
  const [command, setCommand] = useState({
    command: '',
  });

  const handleChange = (e) => {
    // TODO: If keycode == 13, call handleSubmit()?
    setCommand({
      ...command,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.playerCommand(command.command);
    setCommand({
      command: '',
    });
  };

  return (
    <div className="command-line">
      <h2>Where to next?</h2>
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
  );
};

const mapStateToProps = (state) => {
  return {
    // TODO: Placeholder
    // loggedIn: state.loginReducer.loggedIn,
    // isLoading: state.loginReducer.isLoading
  };
};

export default connect(mapStateToProps, { playerCommand })(CommandLine);
