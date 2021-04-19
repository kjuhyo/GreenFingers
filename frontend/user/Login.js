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
        <View style={styles.pairitem}>
          <Item style={styles.singleitem} regular>
            <Input placeholder="ID" />
          </Item>
          <Item style={styles.singleitem} regular>
            <Input placeholder="PASSWORD" />
          </Item>
        </View>
        <View style={styles.pairitem}>
          <Button style={styles.singleitem} full>
            <Text>로그인</Text>
          </Button>
          <Button style={styles.singleitem} full>
            <Text>Sign in with Google</Text>
          </Button>
        </View>
        <View style={styles.textlinkwrap}>
          <Text style={styles.textleft}>회원가입</Text>
          <Text style={styles.textmiddle}>|</Text>
          <Text style={styles.textright}>비회원 입장</Text>
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
  pairitem: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
    paddingBottom: 0,
  },
  textlinkwrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textleft: {
    flex: 5,
    textAlign: "right",
  },
  textmiddle: {
    flex: 1,
    textAlign: "center",
  },
  textright: {
    flex: 5,
    textAlign: "left",
  },
  singleitem: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 8,
  },
});
