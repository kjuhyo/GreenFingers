const CHANGE = 'CHANGE';
const CHANGE_PLANT = 'CHANGE_PLANT';

let roomState = {
  roomnum: 0,
  plantact: '',
  act: '',
};
export const changeRoom = () => ({
  type: CHANGE,
});
export const changePlant = act => ({
  type: CHANGE_PLANT,
  act,
});

export default function room(state = roomState, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        roomnum: state.roomnum + 1,
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
