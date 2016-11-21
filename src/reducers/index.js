import { combineReducers } from 'redux';
import auth from './auth';
import newFast from './newFast';
import myFasts from './myFasts';
import details from './details';

export default combineReducers({
  auth, newFast, myFasts, details,
});
