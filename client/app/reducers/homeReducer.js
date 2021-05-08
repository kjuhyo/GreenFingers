const SETMAIN = 'SETMAIN';
const UPDATE_THEME = 'UPDATE_THEME';

let homeState = {
  theme: '',
  homename: '',
};
export const setMain = (homename, theme) => ({
  type: SETMAIN,
  homename,
  theme,
});
export const updateMain = (homename, theme) => ({
  type: UPDATE_THEME,
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
