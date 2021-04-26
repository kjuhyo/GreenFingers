import React from 'react';
import {View, Text, _View} from 'react-native';

import {
  ModalContainer,
  ModalHeader,
  ModalButton,
  ModalButtonBox,
  ModalBox,
} from '../../../assets/theme/DiaryStyle';

export default function DeleteModal(props) {
  const closeModal = visible => {
    props.setDeleteModalVisible(visible);
  };
  const openModal = visible => {
    props.setCompleteModalVisible(visible);
  };
  return (
    <ModalContainer>
      <ModalBox flexHeight="0.2">
        <ModalHeader justifyContent="center" flexHeight="0.7">
          <Text>정말 삭제하시겠어요?</Text>
        </ModalHeader>
        <ModalButtonBox flexDirection="row" flexHeight="0.4">
          <ModalButton
            backgroundColor="#F44336"
            onPress={() => {
              closeModal(false);
              openModal(true);
            }}>
            <Text style={{color: 'white'}}>삭제</Text>
          </ModalButton>
          <ModalButton onPress={() => closeModal(false)}>
            <Text>취소</Text>
          </ModalButton>
        </ModalButtonBox>
      </ModalBox>
    </ModalContainer>
  );
}
