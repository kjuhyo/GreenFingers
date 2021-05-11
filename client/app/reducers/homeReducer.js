const SETMAIN = 'SETMAIN';

let homeState = {
  theme:
    'https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg',
  homename: '',
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
