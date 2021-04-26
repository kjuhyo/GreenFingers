import {Icon} from 'native-base';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
} from '../../../assets/theme/DiaryStyle';

export default function CheckDateModal(props) {
  // console.log(props);
  const closeModal = visible => {
    props.setDateCheckModalVisible(visible);
  };
  const openCompleteModal = visible => {
    props.setCompleteModalVisible(visible);
  };
  return (
    <ModalContainer>
      <ModalBox flexHeight="0.2">
        <ModalHeader justifyContent="center" flexHeight="0.7">
          <Text>
            {props.selectYear}년 {props.selectMonth}월 {props.selectDay}일에
            물을 주었나요?
          </Text>
        </ModalHeader>
        <ModalButton
          flexHeight="0.4"
          onPress={() => {
            closeModal(false);
            openCompleteModal(true);
          }}>
          <Text>선택 완료</Text>
        </ModalButton>
      </ModalBox>
    </ModalContainer>
  );
}
