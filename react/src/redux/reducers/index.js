import { combineReducers } from 'redux';
import apiCallsInProgress from './apiStatusReducer';
import staff from './staffReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  staff
});

export default rootReducer;
