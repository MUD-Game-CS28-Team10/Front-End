import {
  INIT_START,
  INIT_SUCCESS,
  INIT_FAILURE,
} from '../actions';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

export const initReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case INIT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case INIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default initReducer;