import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actions';

const initialState = {
  isLoading: false,
  error: '',
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default registrationReducer;