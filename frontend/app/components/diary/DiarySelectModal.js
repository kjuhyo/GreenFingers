import { Icon } from "native-base";
import React from "react";
import { View, Text, Pressable } from "react-native";

import styled from "styled-components";

// 피드 수정/삭제 모달 전체 컨테이너
const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

// 피드 수정/삭제 모달 박스
const ModalBox = styled.View`
  flex: 1;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 300px;
  margin-bottom: 300px;
  background-color: white;
  padding: 16px;
  border-radius: 10px;
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
  /* background-color: #ededed; */
  background-color: ${({ theme }) => theme.colors.lightGreenButton};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 2px;
`;
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
