import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
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
    // var actionCodeSettings = {
    //   url: 'https://www.example.com/?email=' + email,
    //   iOS: {
    //     bundleId: 'com.example.ios',
    //   },
    //   android: {
    //     packageName: 'com.green',
    //     installApp: true,
    //     minimumVersion: '12',
    //   },
    //   handleCodeInApp: true,
    //   // When multiple custom dynamic link domains are defined, specify which
    //   // one to use.
    //   dynamicLinkDomain: 'example.page.link',
    // };
    try {
      const auth = firebase.auth();
      await auth.sendPasswordResetEmail(email);
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
            <Item
              style={[
                styles.singleitem,
                isIDFocused ? styles.focused : styles.blurred,
              ]}
              regular>
              <Input
                onBlur={() => setIsIDFocused(false)}
                onFocus={() => setIsIDFocused(true)}
                onChangeText={userEmail => setEmail(userEmail)}
                style={{paddingLeft: 15}}
                placeholder="이메일"
              />
            </Item>
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
});
