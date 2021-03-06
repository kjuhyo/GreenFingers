import {instance} from './index';

export function recomPlantDetail(id) {
  return instance.get(`plant/info/detail/${id}`);
}

export function mbtiQuestions() {
  return instance.get('mbti/all');
}

export function mbtiResult(answer) {
  return instance.get(`mbti/result/${answer}`);
}
