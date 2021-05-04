import {instance} from './index';

// 나의 식물 조회 기반 등록
export function myPlantRegister() {
  return instance.post('plant/care');
}

// 나의 식물 이미지 분류 기반 등록
export function myPlantIdentiyRegister(common) {
  return instance.post(`plant/care/${common}`);
}

// 나의 식물 상세 정보
export function myPlantInfo(pid) {
  return instance.get(`plant/care/${pid}`);
}

// 나의 식물 수정
export function myPlantEdit(pid) {
  return instance.put(`plant/care/${pid}`);
}

// 나의 식물 떠나감
export function myPlantDead(pid) {
  return instance.put(`plant/care/dead/${pid}`);
}

// 나의 식물 삭제
export function myPlantDelete(pid) {
  return instance.put(`plant/care/delete/${pid}`);
}

// 물 준 날짜 등록
export function myPlantWaterRegister() {
  return instance.post('plant/care/water');
}

// 식물의 모든 물 준 날짜 조회
export function myPlantWaterInfo(pid) {
  return instance.get(`plant/care/water/${pid}`);
}

// 물 준 날짜 수정
export function myPlantWaterRegister(wid) {
  return instance.put(`plant/care/water/${wid}`);
}

// 모든 식물 이름 조회(autocomplete를 위한 API)
export function plantAll() {
  return instance.get('plant/info');
}

// 식물 이름 조회
export function plantSearch(search) {
  return instance.get(`plant/info/${search}`);
}

// 식물 상세 정보 조회
export function plantInfoDetail(id) {
  return instance.get(`plant/info/detail/${id}`);
}
