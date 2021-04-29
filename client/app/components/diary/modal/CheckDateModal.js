import React from 'react';
import {Text} from 'react-native';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButtonBox,
  ModalButton,
} from '../../../assets/theme/ModalStyle';

export default function CheckDateModal(props) {
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
        <ModalButtonBox flexDirection="row" flexHeight="0.4">
          <ModalButton
            onPress={() => {
              closeModal(false);
            }}>
            <Text>취소</Text>
          </ModalButton>
          <ModalButton
            backgroundColor="#EEF9E8"
            onPress={() => {
              closeModal(false);
              openCompleteModal(true);
            }}>
            <Text style={{color: '#29582c'}}>네</Text>
          </ModalButton>
        </ModalButtonBox>
      </ModalBox>
    </ModalContainer>
  );
}
