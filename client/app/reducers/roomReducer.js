const CHANGE = 'CHANGE';

let roomState = {
  roomnum: 0,
};
export const changeRoom = () => ({
  type: CHANGE,
});

export default function room(state = roomState, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        roomnum: state.roomnum + 1,
      };
    default:
      return state;
  }
}
