import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

export const ACCESS_TOKEN = async () => {
  try {
    const token = await auth().currentUser.getIdToken(true);
    return await token;
  } catch (error) {
    console.log('access code error');
  }
};

export const DEVICE_TOKEN = async () => {
  try {
    const device_token = await messaging().getToken();
    // console.log(device_token);
    return await device_token;
  } catch (error) {
    console.log('access code error');
  }
};

export const API_BASE_URL = 'http://k4c103.p.ssafy.io/green';

export const RECOGNITION_BASE_URL = 'http://k4c103.p.ssafy.io:5000';
