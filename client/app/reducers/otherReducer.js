let initialState = {
  isLoading: true,
  isSignedUp: false,
  isLoggedIn: false,
  userToken: null,
  haveName: false,
  // isLoggedOut: false,
  // noAccount: false,
};

export default function (state = initialState, action) {
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
      console.log(state);
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      console.log(state);
      return state;
  }
}
