import React, { useState } from "react";
import { View, Text, _View, Modal } from "react-native";

import styled from "styled-components";

import {
  ModalContainer,
  ModalHeader,
  ModalButton,
} from "../../../assets/theme/DiaryStyle";
import CompleteModal from "./CompleteModal";

// 모달 빨간색 버튼
const ModalButton2 = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.deleteRed};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 2px;
`;
// 피드 삭제 확인 모달 박스
const DeleteCheckModalBox = styled.View`
  flex: 1;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 300px;
  margin-bottom: 300px;
  background-color: white;
  padding: 16px;
  border-radius: 10px;
  align-items: center;
`;

export default function DeleteModal(props) {
  const [CompleteModalVisible, setCompleteModalVisible] = useState(false);
  const closeModal = (visible) => {
    props.setDeleteModalVisible(visible);
  };
  return (
    <ModalContainer>
      <DeleteCheckModalBox>
        <ModalHeader>
          <Text style={{ fontWeight: "bold" }}>정말 삭제하시겠어요?</Text>
        </ModalHeader>
        <View style={{ flex: 0.4, flexDirection: "row" }}>
          <ModalButton backgroundColor="#F44336">
            <Text style={{ color: "white" }}>삭제</Text>
          </ModalButton>
          <ModalButton onPress={() => closeModal(false)}>
            <Text>취소</Text>
          </ModalButton>
        </View>
      </DeleteCheckModalBox>
    </ModalContainer>
  );
}
