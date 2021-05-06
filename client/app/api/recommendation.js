import {instance} from './index';

export function recomPlantDetail(id) {
  return instance.get(`plant/info/detail/${id}`);
}
