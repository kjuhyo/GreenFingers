// const TO_LOGIN = 'auth/TO_LOGIN';
// const TO_SIGNUP = 'auth/TO_SIGNUP';
// const TO_ADD_INFO = 'auth/TO_ADD_INFO';
const TO_HOME = 'TO_HOME';
const CURRENT_USER = 'CURRENT_USER';
const ADD_UID = 'ADD_UID';

// export const toLogin = () => ({type: TO_LOGIN});
// export const toSignup = () => ({type: TO_SIGNUP});
// export const toAddInfo = () => ({type: TO_ADD_INFO});
export const toHome = () => ({type: TO_HOME});
export const currentUser = (token, uid) => ({
  type: CURRENT_USER,
  token: token,
  uid: uid,
});
export const addToken = token => ({
  type: ADD_TOKEN,
  token,
});
export const addUid = uid => ({
  type: ADD_UID,
  uid,
});

let initialState = {
  isLoading: true,
  // isSignedUp: false,
  isLoggedIn: false,
  userToken: null,
  token: '',
  uid: '',
  // isEntered: false,
  // haveName: false,
  // isLoggedOut: false,
  // noAccount: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'ADD_UID':
      return {
        ...state,
        uid: action.uid,
      };
    case 'ADD_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'CURRENT_USER':
      return {
        ...state,
        token: action.payload.token,
      };
    case 'TO_HOME':
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      console.log(state);
      return state;
  }
}
