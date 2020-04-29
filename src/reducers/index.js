import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  // LOGOUT_START,
  // LOGOUT_SUCCESS,
  // LOGOUT_FAILURE
} from '../actions';

const initialState = {
  loggedInUser: {},
  isLoading: false,
  error: ''
}

export const reducer = ( state = initialState, action ) => 
{
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }     
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggedInUser: action.payload,
          isLoading: false,
          error: ''
      }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedInUser: {},
                isLoading: false,
                error: action.payload
            }          
        default:
            return state;
  }
}