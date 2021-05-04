const UPDATE_PROFILE_NICKNAME = 'UPDATE_PROFILE_NICKNAME';
const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';
const SET_PROFILE = 'SET_PROFILE';

export const updateProfileNickname = nickname => ({
  type: UPDATE_PROFILE_NICKNAME,
  nickname,
});
export const updateProfileImage = image => ({
  type: UPDATE_PROFILE_IMAGE,
  image,
});
export const setProfile = profile => ({
  type: SET_PROFILE,
  profile,
});

const profileState = {
  nickname: '그린핑거스',
  profile:
    'https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png',
  thema: 'DEAFULT_THEMA_IMAGE',
};

export default function profile(state = profileState, action) {
  switch (action.type) {
    case 'SET_PROFILE':
      console.log(action.profile);
      return action.profile;
    case 'UPDATE_PROFILE_NICKNAME':
      return {
        ...state,
        nickname: action.profile,
      };
    case 'UPDATE_PROFILE_IMAGE':
      return {
        ...state,
        profile: action.image,
      };
    default:
      return state;
  }
}
