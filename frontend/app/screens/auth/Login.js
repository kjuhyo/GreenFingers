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
import "react-native-gesture-handler";

export function LoginScreen({ navigation }) {
  return (
    <Container>
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
          <Text
            style={styles.textleft}
            title="Signup"
            onPress={() => navigation.navigate("Signup")}
          >
            회원가입
          </Text>
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
  halftop: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  halfbottom: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  logotext: {
    fontSize: 30,
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
