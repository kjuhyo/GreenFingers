const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const addUser = (email, provider) => ({
  type: ADD_USER,
  email,
  provider,
});

export const addUid = uid => ({
  type: ADD_UID,
  uid,
});

const profileState = {
  nickname: '그린핑거스',
  profile:
    'https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png',
  thema: 'DEAFULT_THEMA_IMAGE',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'ADD_UID':
      return {
        ...state,
        uid: action.uid,
      };
    case 'ADD_USER':
      console.log(action);
      return {
        ...state,
        email: action.email,
        provider: action.provider,
      };
    default:
      return state;
  }
}
