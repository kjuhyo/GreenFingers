import React from 'react';
import {View, Text, StyleSheet, ScrollView, Form} from 'react-native';
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
import {useForm} from 'react-hook-form';

export function SignupScreen({navigation}) {
  const [isIDFocused, setIsIDFocused] = useState(false);
  const [isPWFocused, setIsPWFocused] = useState(false);
  // const [isNNFocused, setIsNNFocused] = useState(false);
  const [isPWCFocused, setIsPWCFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

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
              <Text style={styles.signup}>회원가입</Text>
            </View>
          </View>
          <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
            <input
              type="text"
              {...register('Email', {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <input
              {...register('password', {required: 'Password is required!'})}
            />
            {errors.password && (
              <p style={{color: 'white'}}>{errors.password.message}</p>
            )}
            <input
              {...register('passwordConfirmation', {
                required: 'Please confirm password!',
                validate: {
                  matchesPreviousPassword: value => {
                    const {password} = getValues();
                    return password === value || 'Passwords should match!';
                  },
                },
              })}
            />
            {errors.passwordConfirmation && (
              <p style={{color: 'white'}}>
                {errors.passwordConfirmation.message}
              </p>
            )}

            {/* <AuthButton full style={{marginTop: 20}}>
              <AuthButtonText
                title="Home"
                onPress={() =>
                  // navigation.navigate('RecommendationStacks', {
                  //   screen: 'Surveyintro',
                  // })
                  navigation.navigate('Addinfo')
                }>
                회원가입
              </AuthButtonText>
            </AuthButton>  */}
          </form>
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
    marginVertical: 8,
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
