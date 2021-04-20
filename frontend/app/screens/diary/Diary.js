// react
import React from "react";
import "react-native-gesture-handler";

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

// import PlantTab from "../../components/diary/Tab";

export function DiaryScreen({ navigation }) {
  return (
    <Container>
      <Header hasTabs />
      <Tabs
        renderTabBar={() => (
          <ScrollableTab
            tabsContainerStyle={{ justifyContent: "flex-start" }}
            style={{ height: 60, backgroundColor: "#F9F9F9", borderWidth: 0 }}
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
                small
                source={{
                  uri:
                    "https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfNTkg/MDAxNTMwMzI2NjQwOTIx.V2Vi9fi-77A0y4gFgpDi150YjEGnd2xk9H4y0MCUAmMg.tiU5xMaA44sUGo_XaQGii4mcqKGJExz2Q7lIzNyjEx8g.JPEG.flowervine/DSC00041.JPG?type=w800",
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
                small
                source={{
                  uri:
                    "https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfNTkg/MDAxNTMwMzI2NjQwOTIx.V2Vi9fi-77A0y4gFgpDi150YjEGnd2xk9H4y0MCUAmMg.tiU5xMaA44sUGo_XaQGii4mcqKGJExz2Q7lIzNyjEx8g.JPEG.flowervine/DSC00041.JPG?type=w800",
                }}
              />
            </TabHeading>
          }
        ></Tab>
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: "#F9F9F9",
              }}
            >
              <Thumbnail
                small
                source={{
                  uri:
                    "https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfNTkg/MDAxNTMwMzI2NjQwOTIx.V2Vi9fi-77A0y4gFgpDi150YjEGnd2xk9H4y0MCUAmMg.tiU5xMaA44sUGo_XaQGii4mcqKGJExz2Q7lIzNyjEx8g.JPEG.flowervine/DSC00041.JPG?type=w800",
                }}
              />
            </TabHeading>
          }
        ></Tab>
        {/* <PlantTab /> */}
      </Tabs>
    </Container>
  );
}
