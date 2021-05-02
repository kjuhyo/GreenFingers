import {instance} from './index';

export function createRoom() {
  return instance.post('room/create');
}

export function deleteRoom(id) {
  return instance.put(`room/delete/${id}`);
}

export function findRoom() {
  return instance.get('room/find');
}

export function changeThema() {
  return instance.get('user/changeThema');
}
