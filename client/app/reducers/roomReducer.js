import {ActionSheet} from 'native-base';

const CHANGE = 'CHANGE';
const CHANGE_PLANT = 'CHANGE_PLANT';

let roomState = {
  roomact: '',
  plantact: '',
  act: '',
};
export const changeRoom = act => ({
  type: CHANGE,
  act,
});
export const changePlant = act => ({
  type: CHANGE_PLANT,
  act,
});

export default function room(state = roomState, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        roomact: action.act,
      };
    case 'CHANGE_PLANT':
      return {
        ...state,
        plantact: action.act,
      };
    default:
      return state;
  }
}
