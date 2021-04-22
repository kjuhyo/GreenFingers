import React from "react";
import { View, Text } from "react-native";

import styled from "styled-components";

// 피드 수정/삭제 모달 전체 컨테이너
const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

// 피드 수정/삭제 모달 헤더
const ModalHeader = styled.View`
  flex: 0.8;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 4px;
`;

// 모달 회색버튼
const ModalButton1 = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 2px;
`;

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
