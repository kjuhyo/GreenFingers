import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
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
import { useState } from "react";
import {
  AuthButton,
  AuthButtonText,
  SocialButton,
  SocialButtonText,
} from "../../assets/theme/authstyles";

export function LoginScreen({ navigation }) {
  const [isIDFocused, setIsIDFocused] = useState(false);
  const [isPWFocused, setIsPWFocused] = useState(false);

  return (
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
          <Item
            style={[
              styles.singleitem,
              isIDFocused ? styles.focused : styles.blurred,
            ]}
            regular
          >
            <Input
              placeholder="ID"
              onBlur={() => setIsIDFocused(false)}
              onFocus={() => setIsIDFocused(true)}
            />
          </Item>
          <Item
            style={[
              styles.singleitem,
              isPWFocused ? styles.focused : styles.blurred,
            ]}
            regular
          >
            <Input
              placeholder="PASSWORD"
              onBlur={() => setIsPWFocused(false)}
              onFocus={() => setIsPWFocused(true)}
            />
          </Item>
        </View>
        <View style={styles.pairitem}>
          <AuthButton full>
            <AuthButtonText>로그인</AuthButtonText>
          </AuthButton>
          <SocialButton full>
            <SocialButtonText>Sign in with Google</SocialButtonText>
          </SocialButton>
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
  container: {
    backgroundColor: "#F9F9F9",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 60,
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
    fontSize: 35,
    fontWeight: "700",
    color: "#29582C",
  },
  form: {
    flex: 2,
    paddingHorizontal: 60,
  },
  pairitem: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
    marginBottom: 0,
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
    marginVertical: 4,
    borderRadius: 12,
    backgroundColor: "white",
  },
  focused: {
    borderColor: "#8AD169",
    borderTopWidth: 1.1,
    borderBottomWidth: 1.1,
    borderLeftWidth: 1.1,
    borderRightWidth: 1.1,
  },
  blurred: {
    borderColor: "#ECECE2",
  },
});
