import { Icon } from "native-base";
import React from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components";

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton1,
  ModalButtonBox,
  Line,
} from "../../../assets/theme/DiaryStyle";

// const Line = styled.View`
//   height: 0.3px;
//   background-color: black;
// `;

export default function DiarySelectModal(props) {
  const closeModal = (visible) => {
    props.setModalVisible(visible);
  };

  return (
    <ModalContainer>
      <ModalBox flexHeight="0.3">
        <ModalHeader complete>
          {/* <Text style={{ fontWeight: "bold" }}>선택</Text> */}
          <Pressable onPress={() => closeModal(false)}>
            <Icon type="AntDesign" name="close" style={{ fontSize: 20 }} />
          </Pressable>
        </ModalHeader>
        {/* 물주기 버튼 */}
        <ModalButtonBox>
          <ModalButton1
            onPress={() => {
              closeModal(false);
              // ChangeDateModal(true);
            }}
          >
            <Text>다이어리 보기</Text>
            <Icon type="Octicons" name="book" style={{ fontSize: 20 }} />
          </ModalButton1>
          {/* <Line /> */}
          {/* 피드 작성 버튼 */}
          <ModalButton1
            onPress={() => {
              closeModal(false);
              props.navigation.navigate("DiaryWrite");
            }}
          >
            <Text style={{}}>다이어리 작성</Text>
            <Icon
              type="SimpleLineIcons"
              name="pencil"
              style={{ fontSize: 18 }}
            />
          </ModalButton1>
          {/* <Line /> */}
          <ModalButton1
            onPress={() => {
              closeModal(false);
              props.navigation.navigate("DiaryWrite");
            }}
          >
            <Text style={{ color: "#6BABE7" }}>물주기</Text>
            <Icon
              type="Ionicons"
              name="water"
              style={{ fontSize: 20, color: "#6BABE7" }}
            />
          </ModalButton1>
        </ModalButtonBox>
      </ModalBox>
    </ModalContainer>
  );
}
