import axios from 'axios';
import { Alert } from 'react-native';
import {ACCESS_TOKEN, API_BASE_URL} from '../config/config';

// 토큰 있는 axios 인스턴스(엑세스토큰 수정 필요)
export const instance = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {'Content-type': 'application/json', access_token: ACCESS_TOKEN},
});


// interceptors
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  if (error.response.status == '401') {
    Alert.alert('로그인 만료', '로그인이 만료되었습니다. 다시 로그인 해주세요.')
  } else if (error.response.status == '403') {
    Alert.alert('권한이 없거나 로그인이 필요합니다.')
  } else {
    console.log(error);
  }
  return Promise.reject(error);
});