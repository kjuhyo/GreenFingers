import React from "react";
import { View, Text } from "react-native";

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
} from "../../../assets/theme/DiaryStyle";

export default function CompleteModal(props) {
  const closeModal = (visible) => {
    props.setCompleteModalVisible(visible);
  };
  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeader>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {props.content}
          </Text>
        </ModalHeader>
        {/* 날짜 선택 View(추후 Date Picker 구현할 예정) */}
        <View style={{ flex: 1 }}></View>
        <ModalButton
          onPress={() => {
            closeModal(false);
          }}
        >
          <Text>확인</Text>
        </ModalButton>
      </ModalBox>
    </ModalContainer>
  );
}
