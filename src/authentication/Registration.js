import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/registrationActions';

const LogInForm = (props) => {
  const [newUser, setNewUser] = useState({
    username: '',
    password1: '',
    password2: '',
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
    e.target.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.register(newUser);
    //reset form to blank below
    setNewUser({
      username: '',
      password1: '',
      password2: '',
    });
  };

  return (
    <div className="login">
      <div className="login-body">
        {/* <div className="img-container">
          <img src="src/assets/cave.jpg" />
        </div> */}
        <div className="form-container">
          <h1>Register for the Game!</h1>
          <form onSubmit={handleSubmit} method="POST">
            <fieldset>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={newUser.username}
                required
              />
              <label htmlFor="password1">Password</label>
              <input
                style={{ marginBottom: '15px' }}
                className="input-class"
                type="password"
                name="password1"
                placeholder="Password"
                onChange={handleChange}
                value={newUser.password1}
                required
              />
              <label htmlFor="password2">Re-enter Password</label>
              <input
                style={{ marginBottom: '15px' }}
                className="input-class"
                type="password"
                name="password2"
                placeholder="Re-enter Password"
                onChange={handleChange}
                value={newUser.password2}
                required
              />
              <button type="submit">Register</button>
            </fieldset>
            <div className="login">
              <p>Need to Login?</p>
              <Link className="reg-link" to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { register })(LogInForm);
