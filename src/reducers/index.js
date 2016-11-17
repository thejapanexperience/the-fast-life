import { combineReducers } from 'redux';
import auth from './auth';
import newFast from './newFast';

export default combineReducers({
  auth, newFast,
});
