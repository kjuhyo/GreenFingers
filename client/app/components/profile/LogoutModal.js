import React from 'react';
import {Text} from 'react-native';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButtonBox,
  ModalButton,
} from '../../assets/theme/ModalStyle';

export default function LogoutModal(props) {
  const closeModal = visible => {
    props.setModalVisible(visible);
  };
  const openCompleteModal = visible => {
    props.setCompleteModalVisible(visible);
  };
  return (
    <ModalContainer>
      <ModalBox flexHeight="0.2">
        <ModalHeader justifyContent="center" flexHeight="0.7">
          <Text>로그아웃 하시겠어요?</Text>
        </ModalHeader>
        <ModalButtonBox
          flexDirection="row"
          flexHeight="0.4"
          style={{backgroundColor: 'rgba(255,255,255, 0.9'}}>
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
