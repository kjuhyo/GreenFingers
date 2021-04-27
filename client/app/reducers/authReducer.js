let initialState = {
  isLoading: true,
  isSignedUp: false,
  isLoggedIn: true,
  userToken: null,
  haveName: true,
  // isLoggedOut: false,
  // noAccount: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TO_SIGNUP':
      return {
        ...state,
        isLoading: false,
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
        isLoading: false,
        isLoggedIn: false,
        noAccount: false,
      };
    default:
      // need this for default case
      return {...state};
    // case 'RESTORE_TOKEN':
    //   return {
    //     ...prevState,
    //     userToken: action.token,
    //     isLoading: false,
    //   };
    // case 'SIGNED_UP':
    //   return {
    //     ...prevState,
    //     isLoggedIn: true,
    //     isSignedUp: true,
    //     isLoading: false,
    //     userToken: action.token,
    //   };
    // case 'SIGN_IN':
    //   return {
    //     ...prevState,
    //     isLoggedOut: false,
    //     isLoggedIn: true,
    //     isSignedUp: true,
    //     userToken: action.token,
    //   };
    // case 'SIGN_OUT':
    //   return {
    //     ...prevState,
    //     isLoggedOut: true,
    //   };
  }
}
