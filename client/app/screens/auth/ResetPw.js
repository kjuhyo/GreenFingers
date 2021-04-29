import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Button,
  StyleProvider,
  Icon,
} from 'native-base';
import {AuthButton, AuthButtonText} from '../../assets/theme/authstyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useState} from 'react';
import firebase from '../../components/auth/firebase';

export function ResetPwScreen({navigation}) {
  const [isIDFocused, setIsIDFocused] = useState(false);
  const [email, setEmail] = useState('');

  const resetPw = async () => {
    try {
      var actionCodeSettings = {
        url: 'http://greenfingers-e8006.firebaseapp.com',
        iOS: {
          bundleId: 'com.example.ios',
        },
        android: {
          packageName: 'com.green',
          installApp: true,
          minimumVersion: '12',
        },
        handleCodeInApp: true,
        dynamicLinkDomain: 'greenfingers-e8006.firebaseapp.com/',
      };
      const auth = firebase.auth();
      await auth.sendPasswordResetEmail(email);
      Alert.alert(
        'Alert',
        '비밀번호 재설정 메일이 발송되었습니다. 메일을 확인해 비밀번호를 변경해 주세요.',
        [{text: 'OK', onPress: () => navigation.navigate('Login')}],
      );
      // navigation.navigate('Login');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('가입 되지 않은 이메일입니다. 이메일을 다시 확인해주세요');
      } else {
        alert('실패했습니다.');
        console.log(error);
      }
    }
  };
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
              <Text style={styles.signup}>비밀번호 재설정</Text>
            </View>
          </View>
          <View style={styles.form}>
            <TextInput
              style={[
                styles.input,
                styles.singleitem,
                isIDFocused ? styles.focused : styles.blurred,
              ]}
              placeholder="이메일"
              onBlur={() => setIsIDFocused(false)}
              onFocus={() => setIsIDFocused(true)}
              onChangeText={userEmail => setEmail(userEmail)}
            />
            <AuthButton full style={{marginTop: 20}} onPress={resetPw}>
              <AuthButtonText title="Home">비밀번호 재설정</AuthButtonText>
            </AuthButton>
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
  signup: {
    fontSize: 12,
    marginTop: 8,
  },
  form: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  singleitem: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 80,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  idcheckbtn: {
    backgroundColor: 'transparent',
    paddingRight: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 0, //테두리 그림자 없애는거
  },
  textpadding: {
    paddingRight: 1,
    color: 'grey',
    fontSize: 12,
    marginHorizontal: 0,
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
