const UPDATE_ACTIVE_PLANT = 'UPDATE_ACTIVE_PLANT';
const DIARY_REGISTER = 'DIARY_REGISTER';
const MODIFY_DIARY = 'MODIFY_DIARY';
const DELETED_DIARY = 'DELETED_DIARY';
const REGISTER_WATER = 'REGISTER_WATER';
const DELETE_WATER = 'DELETE_WATER';
const SET_MARKED_DATE = 'SET_MARKED_DATE';
// const SET_WATER_DATE = 'SET_WATER_DATE';

export const updateActivePlant = (pid, tabidx) => ({
  type: UPDATE_ACTIVE_PLANT,
  pid,
  tabidx,
});

export const registerDiary = registerdiary => ({
  type: DIARY_REGISTER,
  registerdiary,
});

export const modifyDiary = modifydiary => ({
  type: MODIFY_DIARY,
  modifydiary,
});

export const deletedDiary = deleteddiary => ({
  type: DELETED_DIARY,
  deleteddiary,
});

export const registerWater = registerwater => ({
  type: REGISTER_WATER,
  registerwater,
});

export const deleteWater = deletewater => ({
  type: DELETE_WATER,
  deletewater,
});

export const setMarkedDate = markeddate => ({
  type: SET_MARKED_DATE,
  markeddate,
});
// export const setWaterDate = waterdate => ({
//   type: SET_WATER_DATE,
//   waterdate,
// });

let diaryState = {
  pid: -1,
  tabidx: 0,
  registerdiary: false,
  modifydiary: false,
  deleteddiary: false,
  registerwater: false,
  deletewater: false,
  markedDate: {},
  // waterDate: [],
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
    case 'MODIFY_DIARY':
      return {
        ...state,
        modifydiary: action.modifydiary,
      };
    case 'DELETED_DIARY':
      return {
        ...state,
        deleteddiary: action.deleteddiary,
      };
    case 'REGISTER_WATER':
      return {
        ...state,
        registerwater: action.registerwater,
      };
    case 'DELETE_WATER':
      return {
        ...state,
        deletewater: action.deletewater,
      };
    case 'SET_MARKED_DATE':
      return {
        ...state,
        markeddate: action.markeddate,
      };
    // case 'SET_WATER_DATE':
    //   return {
    //     ...state,
    //     waterdate: action.waterdate,
    //   };
    default:
      return state;
  }
}
