import {instance} from './index';
import {instanceFile} from './index';

// 방 생성
export function createRoom(formData) {
  return instanceFile.post('room/create/v2', formData);
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
  return instanceFile.put('user/changeThema');
}

// 업로드한 이미지 주소
export function imageUpload() {
  return instanceFile.post('upload');
}

// 해당 방 상세 조회
export function findRoomDetail(id) {
  return instance.get(`room/find/${id}`);
}
