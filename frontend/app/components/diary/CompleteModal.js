import React from "react";
import { View, Text } from "react-native";

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton1,
} from "../../assets/theme/DiaryStyle";

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
            물주기 완료
          </Text>
        </ModalHeader>
        {/* 날짜 선택 View(추후 Date Picker 구현할 예정) */}
        <View style={{ flex: 1 }}></View>
        <ModalButton1
          onPress={() => {
            closeModal(false);
          }}
        >
          <Text>확인</Text>
        </ModalButton1>
      </ModalBox>
    </ModalContainer>
  );
}
