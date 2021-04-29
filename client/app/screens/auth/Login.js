import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Button,
  StyleProvider,
} from 'native-base';
import 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import {
  AuthButton,
  AuthButtonText,
  SocialButton,
  SocialButtonText,
} from '../../assets/theme/authstyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// google login, firebase
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {
  WEB_CLIENT_ID,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROEJCT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';

var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROEJCT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

//redux
import {
  Provider as StoreProvider,
  useDispatch,
  connect,
  useSelector,
} from 'react-redux';
import {toHome} from '../../reducers/authReducer';

export function LoginScreen({navigation}) {
  // redux
  const dispatch = useDispatch();
  const moveHome = () => dispatch(toHome());
  // console.log(dispatch(toHome()));

  // google login
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  // input focus
  const [isIDFocused, setIsIDFocused] = useState(false);
  const [isPWFocused, setIsPWFocused] = useState(false);

  // input variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const google_signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      const credential = await auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken,
      );
      const user = await firebase.auth().currentUser;
      console.log(user);
      // dispatch(toHome());
      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        alert('some other happend');
        console.log(error);
      }
    }
  };

  const email_logIn = async () => {
    if (email && password) {
      try {
        let response = await auth().signInWithEmailAndPassword(email, password);
        if (response && response.user) {
          alert('Success', 'Authenticated successfully');
          console.log(response);
        }
      } catch (e) {
        console.error(e.message);
      }
    } else {
      alert('이메일과 비밀번호를 입력해주세요');
      console.log('email, password no');
    }
    setEmail('');
    setPassword('');
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // setloggedIn(false);
      // setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
  //firebase
  //await firebase.auth().signOut()

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
    });
  }, []);

  return (
    <ScrollView>
      <KeyboardAwareScrollView>
        <Container style={styles.container}>
          <View style={styles.logo}>
            <View style={styles.halftop}>
              <Text style={styles.logotext}>Green</Text>
            </View>
            <View style={styles.halfbottom}>
              <Text style={styles.logotext}>Fingers</Text>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.pairitem}>
              <TextInput
                style={[
                  styles.input,
                  isIDFocused ? styles.focused : styles.blurred,
                ]}
                value={email}
                onBlur={() => setIsIDFocused(false)}
                onFocus={() => setIsIDFocused(true)}
                placeholder="Email"
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize="none"
              />
              <TextInput
                style={[
                  styles.input,
                  isPWFocused ? styles.focused : styles.blurred,
                ]}
                value={password}
                placeholder="Password"
                onBlur={() => setIsPWFocused(false)}
                onFocus={() => setIsPWFocused(true)}
                onChangeText={userPW => setPassword(userPW)}
                autoCapitalize="none"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.pairitem}>
              <AuthButton full>
                <AuthButtonText onPress={email_logIn}>로그인</AuthButtonText>
              </AuthButton>
              <SocialButton full>
                <SocialButtonText onPress={google_signIn}>
                  Sign in with Google
                </SocialButtonText>
              </SocialButton>
              {/* <SocialButton full>
                <SocialButtonText onPress={signOut}>Sign out</SocialButtonText>
              </SocialButton> */}
            </View>
            <View style={{flex: 1}}>
              <View style={styles.textlinkwrap}>
                <Text
                  style={styles.textleft}
                  title="Signup"
                  onPress={() => navigation.navigate('Signup')}>
                  회원가입
                </Text>
                <Text style={styles.textmiddle}>|</Text>
                <Text style={styles.textright} onPress={moveHome}>
                  비회원 입장
                </Text>
              </View>
              <View style={styles.passwordlink}>
                <Text onPress={() => navigation.navigate('ResetPassword')}>
                  비밀번호 재설정
                </Text>
              </View>
            </View>
          </View>
        </Container>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 60,
  },
  halftop: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  halfbottom: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  logotext: {
    fontSize: 35,
    fontWeight: '700',
    color: '#29582C',
  },
  form: {
    flex: 2,
    paddingHorizontal: 60,
  },
  pairitem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 0,
  },
  textlinkwrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  passwordlink: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textleft: {
    flex: 5,
    textAlign: 'right',
  },
  textmiddle: {
    flex: 1,
    textAlign: 'center',
  },
  textright: {
    flex: 5,
    textAlign: 'left',
  },
  singleitem: {
    marginVertical: 4,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  focused: {
    borderColor: '#8AD169',
    borderTopWidth: 1.1,
    borderBottomWidth: 1.1,
    borderLeftWidth: 1.1,
    borderRightWidth: 1.1,
  },
  blurred: {
    borderColor: '#ECECE2',
  },
  input: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 12,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '100%',
    paddingLeft: 15,
  },
});

//https://medium.com/@asumansenol/firebase-authentication-using-google-facebook-and-email-password-log-in-in-expo-react-native-3bb5ac8461c7
//https://www.youtube.com/watch?v=ZcaQJoXY-3Q&list=PLy9JCsy2u97nVN5GxrjC6rv9XfyxoDtB_

//https://dev.to/harleypadua/google-authentication-with-expo-and-react-native-2l24

//클래스형
//https://www.section.io/engineering-education/react-native-firebase-google-authentication/
