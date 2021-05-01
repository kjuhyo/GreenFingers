import auth from '@react-native-firebase/auth';
import firebase from '../components/auth/firebase';

export const ACCESS_TOKEN = async () => {
  try {
    const token = await auth().currentUser.getIdToken(true);
    console.log('토큰 생성', token);
    return await token;
  } catch (error) {
    console.log('access code error');
  }
};

export const API_BASE_URL = 'http://k4c103.p.ssafy.io/green';
