import auth from '@react-native-firebase/auth';
import firebase from '../components/auth/firebase';

export const ACCESS_TOKEN = async () => {
  try {
    const token = await auth().currentUser.getIdToken(true);
    console.log('access token', token);
    return token;
  } catch (error) {
    console.log('access code error');
  }
};

export const API_BASE_URL = 'http://k4c103.p.ssafy.io/green';
// export const ACCESS_TOKEN = 'accessToken';
