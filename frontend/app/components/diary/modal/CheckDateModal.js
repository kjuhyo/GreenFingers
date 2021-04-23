import { Icon } from "native-base";
import React from "react";
import { View, Text, Pressable } from "react-native";

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton1,
} from "../../../assets/theme/DiaryStyle";

export default function CheckDateModal(props) {
  // const closeDateModal = (visible) => {
  //   props.setDateCheckModalVisible(visible);
  // };
  // const closeCompoleteModal = (visible) => {
  //   props.setCompleteModalVisible(visible);
  // };
  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeader>
          <Text style={{ fontWeight: "bold" }}>언제 물을 주었나요?</Text>
          <Pressable>
            <Icon type="AntDesign" name="close" style={{ fontSize: 20 }} />
          </Pressable>
        </ModalHeader>
        {/* 날짜 선택 View(추후 Date Picker 구현할 예정) */}
        <View style={{ flex: 1 }}></View>
        <ModalButton1>
          <Text>선택 완료</Text>
        </ModalButton1>
      </ModalBox>
    </ModalContainer>
  );
}
