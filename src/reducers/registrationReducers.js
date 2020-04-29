import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actions';

const initialState = {
  loggedIn: false,
  isLoading: false,
  error: '',
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        loggedIn: false,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loggedIn: false,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;