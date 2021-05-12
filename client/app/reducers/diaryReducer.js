const UPDATE_ACTIVE_PLANT = 'UPDATE_ACTIVE_PLANT';
const DIARY_REGISTER = 'DIARY_REGISTER';

export const updateActivePlant = (pid, tabidx) => ({
  type: UPDATE_ACTIVE_PLANT,
  pid,
  tabidx,
});

export const registerDiary = registerdiary => ({
  type: DIARY_REGISTER,
  registerdiary,
});

let diaryState = {
  pid: -1,
  tabidx: 0,
  registerdiary: false,
};

export default function diary(state = diaryState, action) {
  switch (action.type) {
    case 'UPDATE_ACTIVE_PLANT':
      return {
        ...state,
        pid: action.pid,
        tabidx: action.tabidx,
      };
    case 'DIARY_REGISTER':
      return {
        ...state,
        registerdiary: action.registerdiary,
      };
    default:
      return state;
  }
}
