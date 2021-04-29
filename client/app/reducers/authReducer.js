// const TO_LOGIN = 'auth/TO_LOGIN';
// const TO_SIGNUP = 'auth/TO_SIGNUP';
// const TO_ADD_INFO = 'auth/TO_ADD_INFO';
const TO_HOME = 'TO_HOME';

// export const toLogin = () => ({type: TO_LOGIN});
// export const toSignup = () => ({type: TO_SIGNUP});
// export const toAddInfo = () => ({type: TO_ADD_INFO});
export const toHome = () => ({type: TO_HOME});

let initialState = {
  isLoading: true,
  // isSignedUp: false,
  isLoggedIn: false,
  userToken: null,
  isEntered: false,
  // haveName: false,
  // isLoggedOut: false,
  // noAccount: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'TO_LOGIN':
      return {
        ...state,
        isLoading: false,
      };
    case 'TO_SIGNUP':
      return {
        ...state,
        isLoggedIn: true,
        isSignedUp: false,
        noAccount: true,
      };
    case 'TO_ADD_INFO':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        noAccount: false,
      };
    case 'TO_HOME':
      return {
        ...state,
        isEntered: true,
      };
    default:
      console.log(state);
      return state;
  }
}
