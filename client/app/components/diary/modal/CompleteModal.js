import React from 'react';
import {Text} from 'react-native';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
} from '../../../assets/theme/DiaryStyle';

export default function CompleteModal(props) {
  const closeModal = visible => {
    props.setCompleteModalVisible(visible);
  };
  return (
    <ModalContainer>
      <ModalBox flexHeight="0.2">
        <ModalHeader justifyContent="center" flexHeight="0.7">
          <Text>{props.content}</Text>
        </ModalHeader>
        <ModalButton
          flexHeight="0.4"
          onPress={() => {
            closeModal(false);
          }}>
          <Text>확인</Text>
        </ModalButton>
      </ModalBox>
    </ModalContainer>
  );
}
