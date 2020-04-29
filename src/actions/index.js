import axioswithauth from '../utils/axioswithauth';
import axios from 'axios';
import API_URL from '../utils/apiUrl';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const logIn = (user, history) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });

    axioswithauth()
      .post(`/login`, user)
      .then((res) => {
        console.log('LOGIN POST RESPONSE', res);
        localStorage.setItem('token', res.data.key);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAILURE, payload: `Login Failed` });
      });
  };
};

export const register = (newUser) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_START });

    axioswithauth()
      .post(`/registration/`, newUser)
      .then((res) => {
        localStorage.setItem('token', res.data.key);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: REGISTER_FAILURE, payload: `Registration Failed` });
      });
  };
};