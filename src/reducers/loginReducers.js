import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  // LOGOUT_START,
  // LOGOUT_SUCCESS,
  // LOGOUT_FAILURE
} from '../actions';

const initialState = {
  loggedIn: false,
  isLoading: false,
  error: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggedIn: false,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        isLoading: false,
        error: action.payload
      };
    // case LOGOUT_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case LOGOUT_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   };
    // case LOGOUT_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload
    //   };
    default:
      return state;
  }
};

export default loginReducer;