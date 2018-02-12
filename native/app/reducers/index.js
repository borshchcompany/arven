import { combineReducers } from 'redux';

import auth from './auth_reducer';
import event from './event_reducer';

export default combineReducers({
  auth,
  event,
});