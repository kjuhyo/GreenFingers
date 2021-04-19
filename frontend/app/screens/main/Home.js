import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";
import styled from "styled-components";
// import theme from '../../assets/theme';

const TitleTest = styled.Text`
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: 50;
`;

export function HomeScreen({ navigation }) {
  return (
    <View>
      <TitleTest>Home Screen</TitleTest>
    </View>
  );
}
