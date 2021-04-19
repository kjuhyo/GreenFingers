import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";
import { HomeScreen } from "../main/Home";

export function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>로그인</Text>
    </View>
  );
}
