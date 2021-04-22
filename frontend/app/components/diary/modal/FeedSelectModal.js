import { Icon } from "native-base";
import React from "react";
import { Pressable, Text } from "react-native";

import styled from "styled-components";

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
  ModalButtonBox,
  Line,
} from "../../../assets/theme/DiaryStyle";

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
      <ModalBox flexHeight="0.22">
        <ModalHeader complete>
          {/* <Text style={{ fontWeight: "bold" }}>선택</Text> */}
          <Pressable onPress={() => closeModal(false)}>
            <Icon type="AntDesign" name="close" style={{ fontSize: 20 }} />
          </Pressable>
        </ModalHeader>
        {/* 물주기 버튼 */}
        <ModalButtonBox>
          <ModalButton
            justifyContent="space-between"
            onPress={() => {
              closeModal(false);
              // ChangeDateModal(true);
              props.navigation.navigate("DiaryUpdate");
            }}
          >
            <Text>피드 수정</Text>
            <Icon
              type="FontAwesome"
              name="pencil-square-o"
              style={{ fontSize: 20 }}
            />
          </ModalButton>
          <Line />
          {/* 피드 작성 버튼 */}
          <ModalButton
            justifyContent="space-between"
            onPress={() => {
              closeModal(false);
              openDeleteModal(true);
            }}
          >
            <Text style={{ color: "#F44336" }}>피드 삭제</Text>
            <Icon
              type="FontAwesome"
              name="trash-o"
              style={{ fontSize: 20, color: "#F44336" }}
            />
          </ModalButton>
          {/* <Line /> */}
        </ModalButtonBox>
      </ModalBox>
    </ModalContainer>
  );
}
