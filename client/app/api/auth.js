import {instance} from './index';

export function signUp() {
  return instance.post('user/oauth');
}

export function deleteUser() {
  return instance.put('user/delete');
}
