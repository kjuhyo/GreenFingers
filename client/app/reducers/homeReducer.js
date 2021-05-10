const SETMAIN = 'SETMAIN';

let homeState = {
  theme: '',
  homename: '',
};
export const setMain = (homename, theme, address) => ({
  type: SETMAIN,
  homename,
  theme,
  address,
});

export default function home(state = homeState, action) {
  switch (action.type) {
    case 'SETMAIN':
      return {
        homename: action.homename,
        theme: action.theme,
        address: action.address,
      };
    default:
      return state;
  }
}
