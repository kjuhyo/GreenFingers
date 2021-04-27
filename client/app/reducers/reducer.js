import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
const allReducers = combineReducers({
  authReducer: authReducer,
});
export default allReducers;
