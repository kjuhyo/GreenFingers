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
} from "native-base";

// components
import { CalendarView } from "../../components/diary/calendar";
import styled from "styled-components";

// import PlantTab from "../../components/diary/Tab";

const PlusButton = styled.TouchableOpacity`
  width: 50;
  height: 50;
  border-radius: 30;
  background-color: #29582c;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20;
  right: 20;
`;

export function DiaryScreen({ navigation }) {
  return (
    <Container>
      <Header hasTabs />
      <Tabs
        renderTabBar={() => (
          <ScrollableTab
            tabsContainerStyle={{ justifyContent: "flex-start" }}
            style={{
              height: 80,
              backgroundColor: "#F9F9F9",
              borderWidth: 0,
              marginBottom: 50,
            }}
          />
        )}
        tabBarUnderlineStyle={{ height: 2, backgroundColor: "#8AD169" }}
      >
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: "#F9F9F9",
              }}
            >
              <Thumbnail
                source={{
                  uri:
                    "https://e7.pngegg.com/pngimages/194/987/png-clipart-leaf-flowerpot-houseplant-grasses-plant-stem-leaf-leaf-plant-stem.png",
                }}
              />
            </TabHeading>
          }
        >
          <CalendarView />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: "#F9F9F9",
              }}
            >
              <Thumbnail
                source={{
                  uri:
                    "https://e7.pngegg.com/pngimages/194/987/png-clipart-leaf-flowerpot-houseplant-grasses-plant-stem-leaf-leaf-plant-stem.png",
                }}
              />
            </TabHeading>
          }
        >
          <CalendarView />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: "#F9F9F9",
              }}
            >
              <Thumbnail
                source={{
                  uri:
                    "https://e7.pngegg.com/pngimages/194/987/png-clipart-leaf-flowerpot-houseplant-grasses-plant-stem-leaf-leaf-plant-stem.png",
                }}
              />
            </TabHeading>
          }
        >
          <CalendarView />
        </Tab>
        {/* <PlantTab /> */}
      </Tabs>
      <PlusButton title="">
        <Icon name="md-add" style={{ color: "white" }} />
      </PlusButton>
    </Container>
  );
}
