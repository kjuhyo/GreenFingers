const CHANGE = 'CHANGE';
const CHANGE_PLANT = 'CHANGE_PLANT';

let roomState = {
  roomnum: 0,
  plantnum: 0,
};
export const changeRoom = () => ({
  type: CHANGE,
});
export const changePlant = () => ({
  type: CHANGE_PLANT,
});

export default function room(state = roomState, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        roomnum: state.roomnum + 1,
      };
    case 'CHANGE_PLANT':
      return {
        plantnum: state.plantnum + 1,
      };
    default:
      return state;
  }
}
