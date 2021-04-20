// react
import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";

// native-base
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Thumbnail,
  TabHeading,
  Right,
  Body,
  Title,
  View,
} from "native-base";

// components
import { CalendarView } from "../../components/diary/calendar";

// import PlantTab from "../../components/diary/Tab";

export function DiaryScreen({ navigation }) {
  return (
    <Container>
      <Header hasTabs>
        <Body>
          <Title>Diary</Title>
        </Body>
      </Header>
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
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
