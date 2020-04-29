import { combineReducers } from 'redux';
import { registrationReducer } from './registrationReducers';
import { loginReducer } from './loginReducers';

export default combineReducers({
  registrationReducer,
  loginReducer
});