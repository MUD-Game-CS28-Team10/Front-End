import axioswithauth from '../utils/axioswithauth'
import axios from 'axios'
import API_URL from '../utils/apiUrl'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const logIn = (user, history) => {

  return dispatch => {
    dispatch({ type: LOGIN_START });

    axios
      .post(`${API_URL}/login`, user)
      .then(res => {
        console.log('LOGIN POST RESPONSE', res)
        localStorage.setItem('token', res.data.payload)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: `Login Failed`})
      });
  };
};