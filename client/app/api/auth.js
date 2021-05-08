import {instance, instanceFile} from './index';

export function signUp() {
  return instance.post('user/oauth');
}

export function deleteUser() {
  return instance.put('user/delete');
}

export function userInfo() {
  return instance.post('user/oauth/v2');
}

export function updateImage(info) {
  return instanceFile.put('user/updateInfo', info);
}

// 메시징

// 모든 메세지 가져오기
export function getMessage() {
  return instance.get('user/findAllMsg');
}

// 메세지 읽음 표시
export function readMessage() {
  return instance.put('user/checkMsg');
}

// 디바이스 토큰 등록
export function registerDevice() {
  return instance.post('user/register');
}

// 디바이스 토큰 삭제
export function deleteDevice() {
  return instance.delete('user/logout');
}
