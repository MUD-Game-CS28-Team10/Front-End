import axios from 'axios';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (newUser, history) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_START });

    axios
      .post(`https://mud-cs23-backend.herokuapp.com/api/registration/`, newUser)
      .then((res) => {
        localStorage.setItem('token', res.data.key);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        history.push('/game');
      })
      .catch((err) => {
        dispatch({ type: REGISTER_FAILURE, payload: `Registration Failed` });
      });
  };
};
