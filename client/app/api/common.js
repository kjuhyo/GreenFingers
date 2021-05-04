import {instance} from './index';

export function getUserInfo() {
  return instance.post('user/oauth/v2');
}
