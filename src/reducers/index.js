import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  // LOGOUT_START,
  // LOGOUT_SUCCESS,
  // LOGOUT_FAILURE
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actions';

const initialState = {
  loggedInUsername: '',
  isLoading: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUsername: action.payload,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loggedInUsername: action.payload,
        isLoading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
