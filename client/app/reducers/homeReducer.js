const SETMAIN = 'SETMAIN';

let homeState = {
  theme:
    'https://ssafybucket.s3.ap-northeast-2.amazonaws.com/DEFAULT_HOME_THEME.jpg',
  homename: 'HOME',
};
export const setMain = (homename, theme) => ({
  type: SETMAIN,
  homename,
  theme,
});

export default function home(state = homeState, action) {
  switch (action.type) {
    case 'SETMAIN':
      return {
        homename: action.homename,
        theme: action.theme,
      };
    default:
      return state;
  }
}
