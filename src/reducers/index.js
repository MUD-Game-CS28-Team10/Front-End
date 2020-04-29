import { combineReducers } from 'redux';
import { registrationReducer } from './registrationReducers';
import { loginReducer } from './loginReducers';
import { initReducer } from './gameReducers';

export default combineReducers({
  registrationReducer,
  loginReducer,
  initReducer
});