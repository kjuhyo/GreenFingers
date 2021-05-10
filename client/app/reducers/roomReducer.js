const CHANGE = 'CHANGE';
const CHANGE_PLANT = 'CHANGE_PLANT';
const GET_ROOMLIST = 'GET_ROOMLIST';
const ROOM_NAME_THEME = 'ROOM_NAME_THEME';

let roomState = {
  roomact: '',
  plantact: '',
  act: '',
  rooms: [],
};

export const changeRoom = act => ({
  type: CHANGE,
  act,
});
export const changePlant = act => ({
  type: CHANGE_PLANT,
  act,
});
export const getRoomlist = rooms => ({
  type: GET_ROOMLIST,
  rooms,
});
export const roomNameTheme = (roomid, roomname, roomtheme) => ({
  type: ROOM_NAME_THEME,
  roomid,
  roomname,
  roomtheme,
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
    case 'GET_ROOMLIST':
      return {
        ...state,
        rooms: action.rooms,
      };
    case 'ROOM_NAME_THEME':
      return {
        ...state,
        rooms: state.rooms.map(room => {
          if (room.rid !== action.roomid) {
            return room;
          } else {
            return {
              ...room,
              roomName: action.roomname,
              theme: action.roomtheme,
            };
          }
        }),
      };
    default:
      return state;
  }
}
