import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
// import "firebase/firestore"
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';

// import "firebase/auth";
// import "firebase/database";
// import {
//   ANDROID_CLIENT_ID,
//   IOS_CLIENT_ID,
//   ANDROID_STANDALONG_CLIENT_ID,
// } from "@env";

//firebase
// import firebase from "firebase/app";
import {
  // GOOGLE_CLIENT_ID,
  // API_KEY,
  // MESSAGING_SENDER_ID,
  // APP_ID,
  // AUTH_DOMAIN,
  // DATABASE_URL,
  // PROJECT_ID,
  // STORAGE_BUCKET,
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
} from '@env';

// firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Access your firebase app
// let app = firebase.app();
// // Delete your app.
// app.delete(app);

// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   databaseURL: DATABASE_URL,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   // measurementId: 'G-2NQFW6NDY4',
// };

class GoogleLogin extends React.Component {
  state = {email: '', password: '', errorMessage: '', loading: false};
  onLoginSuccess() {
    console.log('logged in');
    this.props.navigation.navigate('Home');
  }

  onLoginFailure(errorMessage) {
    this.setState({error: errorMessage, loading: false});
  }

  async signInWithGoogle() {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        redirectUrl: 'com.parkdasol.frontend:/oauth2redirect/google',
        // behavior: "web",
        scopes: ['profile', 'email'],
      });
      console.log(result);
      if (result.type === 'success') {
        console.log('in');
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken,
        );
        const googleProfileData = await firebase
          .auth()
          .signInWithCredential(credential);
        this.onLoginSuccess.bind(this);
      }
    } catch ({message}) {
      alert('login: Error:' + message);
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            style={{width: '86%', marginTop: 10}}
            onPress={() => this.signInWithGoogle()}>
            <View style={styles.googleButton}>
              <Text
                style={{
                  letterSpacing: 0.5,
                  fontSize: 16,
                  color: '#707070',
                }}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '86%',
    marginTop: 15,
  },
  logo: {
    marginTop: 20,
  },
  input: {
    fontSize: 20,
    borderColor: '#707070',
    borderBottomWidth: 1,
    paddingBottom: 1.5,
    marginTop: 25.5,
  },
  button: {
    backgroundColor: '#3A559F',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#707070',
  },
});
export default GoogleLogin;

//https://stackoverflow.com/questions/63435166/android-problem-with-expo-google-app-auth
