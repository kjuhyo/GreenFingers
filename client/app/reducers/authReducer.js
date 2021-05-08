const ADD_USER = 'ADD_USER';
const ADD_UID = 'ADD_UID';

export const addUser = (email, provider) => ({
  type: ADD_USER,
  email,
  provider,
});

export const addUid = uid => ({
  type: ADD_UID,
  uid,
});

let initialState = {
  email: '',
  provider: '',
  uid: '',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'ADD_UID':
      return {
        ...state,
        uid: action.uid,
      };
    case 'ADD_USER':
      return {
        ...state,
        email: action.email,
        provider: action.provider,
      };
    default:
      return state;
  }
}
