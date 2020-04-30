import { combineReducers } from 'redux';
import { registrationReducer } from './registrationReducers';
import { loginReducer } from './loginReducers';
import { gameReducer } from './gameReducers';

export default combineReducers({
  registrationReducer,
  loginReducer,
  gameReducer
});