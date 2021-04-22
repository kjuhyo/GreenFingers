import { Icon } from "native-base";
import React from "react";
import { Pressable, Text } from "react-native";

import styled from "styled-components";

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton1,
} from "../../assets/theme/DiaryStyle";

// 모달 빨간색 버튼
const ModalButton2 = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.deleteRed};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 2px;
`;

export default function FeedSelectModal(props) {
  const closeModal = (visible) => {
    props.setModalVisible(visible);
  };
  const openDeleteModal = (visible) => {
    props.setDeleteModalVisible(visible);
  };
  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeader>
          <Text style={{ fontWeight: "bold" }}>Settings</Text>
          <Pressable onPress={() => closeModal(false)}>
            <Icon type="AntDesign" name="close" style={{ fontSize: 20 }} />
          </Pressable>
        </ModalHeader>
        <ModalButton1 style={{ marginBottom: 1 }}>
          <Text>피드 수정</Text>
        </ModalButton1>
        <ModalButton2
          onPress={() => {
            closeModal(false);
            openDeleteModal(true);
          }}
        >
          <Text style={{ color: "white" }}>피드 삭제</Text>
        </ModalButton2>
      </ModalBox>
    </ModalContainer>
  );
}
