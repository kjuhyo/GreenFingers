import {instance} from './index';

// 방 생성
export function createRoom() {
  return instance.post('room/create/v2');
}

// 방 삭제
export function deleteRoom(id) {
  return instance.put(`room/delete/${id}`);
}

// 모든 방 조회
export function findRoom() {
  return instance.get('room/find');
}

// 테마 변경
export function changeThema() {
  return instance.get('user/changeThema');
}

// 업로드한 이미지 주소
export function imageUpload() {
  return instance.post('upload');
}
