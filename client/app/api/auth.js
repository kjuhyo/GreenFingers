import {instance, instanceFile, instanceDevice} from './index';

//회원가입, 로그인
export function signUp() {
  return instance.post('user/oauth');
}

//탈퇴
export function deleteUser() {
  return instance.put('user/delete');
}

//유저 정보
export function userInfo() {
  return instance.post('user/oauth/v2');
}

//유저 사진 정보 수정
export function updateImage(info) {
  return instanceFile.put('user/updateInfo/v2', info);
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
  return instanceDevice.post('user/register');
}

// 디바이스 토큰 삭제
export function deleteDevice() {
  return instanceDevice.delete('user/logout');
}
