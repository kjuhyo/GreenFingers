import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Button,
  StyleProvider,
} from "native-base";
// import PropTypes from "prop-types";

export default function Login() {
  return (
    <Container>
      {/* <Header /> */}
      <View style={styles.logo}>
        <Text>Green Fingers</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.formitem}>
          <Item regular>
            <Input placeholder="Regular Textbox" />
          </Item>
          <Item regular>
            <Input placeholder="Regular Textbox" />
          </Item>
        </View>
        <View style={styles.formitem}>
          <Button full>
            <Text>로그인</Text>
          </Button>
          <Button full>
            <Text>Sign in with Google</Text>
          </Button>
        </View>
        <View style={styles.formitem}>
          <Text>회원가입</Text>
          <Text>|</Text>
          <Text>비회원 입장</Text>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 40,
  },
  form: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  formitem: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 0,
  },
});
