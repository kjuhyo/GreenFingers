// react
import React from "react";
import "react-native-gesture-handler";
// import { Button, ScrollView, StyleSheet } from "react-native";

// native-base
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Thumbnail,
  TabHeading,
  Icon,
  Left,
  Button,
  Body,
  Title,
} from "native-base";

// components
import { CalendarView } from "../../components/diary/Calendar";
import styled from "styled-components";

export function DiaryWriteScreen({ navigation }) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body />
      </Header>
    </Container>
  );
}
