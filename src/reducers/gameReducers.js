import {
  INIT_START,
  INIT_SUCCESS,
  INIT_FAILURE,
  MAP_START,
  MAP_SUCCESS,
  MAP_FAILURE,
  MOVE_START,
  MOVE_SUCCESS,
  MOVE_FAILURE
} from '../actions/gameActions';

const initialState = {
  data: {},
  isLoading: false,
  error: '',
};

export const gameReducer = (state = initialState, action) => {
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
    case MAP_START:
      return {
        ...state,
        isLoading: true,
      };
    case MAP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case MAP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case MOVE_START:
      return {
        ...state,
        isLoading: true,
      };
    case MOVE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case MOVE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default gameReducer;