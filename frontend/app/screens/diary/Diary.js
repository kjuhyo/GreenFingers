// react
import React, { useState } from "react";
import "react-native-gesture-handler";
import { Modal, ScrollView } from "react-native";

// styled-component
import styled from "styled-components";

// native-base
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Thumbnail,
  TabHeading,
  Icon,
} from "native-base";

// library
import { CalendarView } from "../../components/diary/Calendar";

// components
import Feed from "../../components/diary/Feed";
import DiarySelectModal from "../../components/diary/DiarySelectModal";
import SelectDateModal from "../../components/diary/SelectDateModal";
import CompleteModal from "../../components/diary/CompleteModal";

// 나중에 Tab을 분리해서 컴포넌트화 할 예정
// import PlantTab from "../../components/diary/Tab";

const PlusButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export function DiaryScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [DateModalVisible, setDateModalVisible] = useState(false);
  const [CompleteModalVisible, setCompleteModalVisible] = useState(false);

  return (
    <Container>
      <Tabs
        renderTabBar={() => (
          <ScrollableTab
            tabsContainerStyle={{ justifyContent: "flex-start" }}
            style={{
              height: 80,
              backgroundColor: "#F9F9F9",
              borderWidth: 0,
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
                    "http://cereshome.co.kr/web/product/small/20200420/659ff6db3048df1a413a053655c22ebb.jpg",
                }}
              />
            </TabHeading>
          }
        >
          <ScrollView style={{ backgroundColor: "#F9F9F9" }}>
            <CalendarView />
            <Feed />
          </ScrollView>
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
                    "http://cereshome.co.kr/web/product/small/20200420/659ff6db3048df1a413a053655c22ebb.jpg",
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
                    "http://cereshome.co.kr/web/product/small/20200420/659ff6db3048df1a413a053655c22ebb.jpg",
                }}
              />
            </TabHeading>
          }
        >
          <CalendarView />
        </Tab>
        {/* <PlantTab /> */}
      </Tabs>

      {/* 화면 오른쪽 하단 플러스 버튼 */}
      <PlusButton title="" onPress={() => setModalVisible(!modalVisible)}>
        <Icon name="md-add" style={{ color: "white" }} />
      </PlusButton>

      {/* 물주기/피드작성 선택 모달창 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <DiarySelectModal
          setModalVisible={setModalVisible}
          setDateModalVisible={setDateModalVisible}
          navigation={navigation}
        />
      </Modal>

      {/* 물주기 날짜 선택 창 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={DateModalVisible}
        onRequestClose={() => {
          setModalVisible(!DateModalVisible);
        }}
      >
        <SelectDateModal
          setDateModalVisible={setDateModalVisible}
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>

      {/* 물주기 완료 모달 */}
      <Modal
        animationType="none"
        transparent={true}
        visible={CompleteModalVisible}
        onRequestClose={() => {
          setCompleteModalVisible(!CompleteModalVisible);
        }}
      >
        <CompleteModal setCompleteModalVisible={setCompleteModalVisible} />
      </Modal>
    </Container>
  );
}
