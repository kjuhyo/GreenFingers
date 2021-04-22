import { Icon } from "native-base";
import React from "react";
import { View, Text, Pressable } from "react-native";

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton1,
} from "../../../assets/theme/DiaryStyle";

export default function DiarySelectModal(props) {
  const closeModal = (visible) => {
    props.setModalVisible(visible);
  };
  const ChangeDateModal = (visible) => {
    props.setDateModalVisible(visible);
  };

  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeader complete>
          <Text style={{ fontWeight: "bold" }}>선택</Text>
          <Pressable onPress={() => closeModal(false)}>
            <Icon type="AntDesign" name="close" style={{ fontSize: 20 }} />
          </Pressable>
        </ModalHeader>
        {/* 물주기 버튼 */}
        <ModalButton1
          style={{ marginBottom: 1 }}
          onPress={() => {
            closeModal(false);
            ChangeDateModal(true);
          }}
        >
          <Text>물주기</Text>
        </ModalButton1>
        {/* 피드 작성 버튼 */}
        <ModalButton1
          onPress={() => {
            closeModal(false);
            props.navigation.navigate("DiaryWrite");
          }}
        >
          <Text>피드 작성</Text>
        </ModalButton1>
      </ModalBox>
    </ModalContainer>
  );
}
