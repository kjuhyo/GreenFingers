import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
const allReducer = combineReducers({
  authReducer: authReducer,
});
export default allReducer;

//redux
// https://levelup.gitconnected.com/create-an-authorization-flow-with-react-navigation-5-x-10b84677806b
// https://github.com/ICeZer0/NativeAuthApp/blob/master/src/App.js

// https://heartbeat.fritz.ai/using-redux-with-react-hooks-in-a-react-native-app-cc410a77f3e2
// https://github.com/amandeepmittal/rnReduxhooks/blob/master/src/screens/ViewNotes.js
