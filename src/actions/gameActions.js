import axioswithauth from '../utils/axioswithauth';

export const INIT_START = 'INIT_START';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_FAILURE = 'INIT_FAILURE';

export const initiateGame = () => {
  return (dispatch) => {
    dispatch({ type: INIT_START });

    axioswithauth()
      .get(`/adv/init`)
      .then((res) => {
        console.log('INIT RESPONSE', res);
        dispatch({ type: INIT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: INIT_FAILURE, payload: `Init Failed` });
      });
  };
};