import React from 'react';

const CommandLine = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Alternatively, if e.keycode == 13 || e.which == 13 (enter)
    console.log('Hello, world');
    // props.logIn(user);
  };

  return (
    <div className="command-line">
      <h2>Where to next?</h2>
      <form action={handleSubmit}>
        <label htmlFor="command">Command:</label>
        <input
          type="text"
          id="command"
          name="command"
          placeholder="Where to next?"
          required
        />
        <br />
      </form>
    </div>
  );
};

export default CommandLine;
