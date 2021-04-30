import {instance} from './index';

export function signUp(params) {
  return instance.post('user/oauth', params);
}
