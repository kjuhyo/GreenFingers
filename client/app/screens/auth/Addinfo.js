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

export function AddinfoScreen({navigation}) {
  const [isIDFocused, setIsIDFocused] = useState(false);
  const [isPWFocused, setIsPWFocused] = useState(false);
  const [isNNFocused, setIsNNFocused] = useState(false);
  const [isPWCFocused, setIsPWCFocused] = useState(false);

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
              <Text style={styles.signup}>닉네임 등록</Text>
            </View>
          </View>
          <View style={styles.form}>
            <Item
              style={[
                styles.singleitem,
                isNNFocused ? styles.focused : styles.blurred,
              ]}
              regular>
              <Input
                onBlur={() => setIsNNFocused(false)}
                onFocus={() => setIsNNFocused(true)}
                style={{paddingLeft: 15}}
                placeholder="닉네임"
              />
              <Button style={styles.idcheckbtn}>
                <Text style={styles.textpadding}>중복확인</Text>
                <Icon
                  type="AntDesign"
                  name="checkcircle"
                  style={styles.textpadding}
                />
              </Button>
            </Item>
            <AuthButton full style={{marginTop: 20}}>
              <AuthButtonText
                title="Home"
                onPress={() =>
                  // navigation.navigate('RecommendationStacks', {
                  //   screen: 'Surveyintro',
                  // })
                  navigation.navigate('Surveyintro')
                }>
                회원가입
              </AuthButtonText>
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
