import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../actions/loginActions';

const LogInForm = props => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    e.target.focus();
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.logIn(user);

    // reset form to blank below
    setUser({
      username: '',
      password: ''
    });
  };

  return (
    <div className="login">
      <div className="login-body">
        {/* <div className="img-container">
          <img src={require('../assets/cave.jpg')} />
        </div> */}
        <div className="form-container">
          <h1>Welcome Back!</h1>
          <form onSubmit={handleSubmit} method="POST">
            <fieldset>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={user.username}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                style={{ marginBottom: '15px' }}
                className="input-class"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                required
              />
              <button type="submit">Sign in</button>
            </fieldset>
            <div className="register">
              <p>Don't have an account?</p>
              <Link className="reg-link" to="/register">
                Register now.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, { logIn })(LogInForm);
