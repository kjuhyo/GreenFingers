import React from "react";
import { View, Text } from "react-native";

import styled from "styled-components";

import {
  ModalContainer,
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
          <ModalButton2>
            <Text style={{ color: "white" }}>삭제</Text>
          </ModalButton2>
          <ModalButton1 onPress={() => closeModal(false)}>
            <Text>취소</Text>
          </ModalButton1>
        </View>
      </DeleteCheckModalBox>
    </ModalContainer>
  );
}
