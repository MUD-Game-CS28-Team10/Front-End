import axioswithauth from '../utils/axioswithauth';

export const INIT_START = 'INIT_START';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_FAILURE = 'INIT_FAILURE';
export const MAP_START = 'MAP_START';
export const MAP_SUCCESS = 'MAP_SUCCESS';
export const MAP_FAILURE = 'MAP_FAILURE';
export const MOVE_START = 'MOVE_START';
export const MOVE_SUCCESS = 'MOVE_SUCCESS';
export const MOVE_FAILURE = 'MOVE_FAILURE';

export const initiateGame = () => {
  return dispatch => {
    dispatch({ type: INIT_START });

    axioswithauth()
      .get(`/adv/init`)
      .then(res => {
        console.log('INIT RESPONSE', res);
        dispatch({ type: INIT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: INIT_FAILURE, payload: err });
      });
  };
};

export const getMap = () => {
  return dispatch => {
    dispatch({ type: MAP_START });

    axioswithauth()
      .get(`/adv/get_map`)
      .then(res => {
        // console.log('MAP RESPONSE', res);
        dispatch({ type: MAP_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: MAP_FAILURE, payload: err });
      });
  };
};

export const playerMove = move => {
  return dispatch => {
    dispatch({ type: MOVE_START });

    axioswithauth()
      .post(`/adv/move`, move)
      .then(res => {
        console.log('MOVE RESPONSE', res);
        dispatch({ type: MOVE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: MOVE_FAILURE, payload: err });
      });
  };
};