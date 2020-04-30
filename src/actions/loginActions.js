import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
// export const LOGOUT_START = 'LOGOUT_START';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const logIn = (user, history) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });

    axios
      .post(`https://lambda-mud-test.herokuapp.com/api/login/`, user)
      .then((res) => {
        console.log('LOGIN POST RESPONSE', res);
        localStorage.setItem('token', res.data.key);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAILURE, payload: err });
      });
  };
};

// export const logOut = (user) => {
//   return (dispatch) => {

//   };
// };
