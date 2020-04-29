import axioswithauth from '../utils/axioswithauth';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

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
