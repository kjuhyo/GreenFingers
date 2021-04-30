import React from 'react';
import {Text} from 'react-native';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
} from '../../../assets/theme/ModalStyle';

export default function CompleteModal(props) {
  const closeModal = visible => {
    props.setCompleteModalVisible(visible);
  };

  // 완료 버튼 눌렀을 때 페이지 이동이 필요한 경우
  const changePage = () => {
    console.log(props.complete);
    if (props.complete != undefined) {
      return props.complete();
    }
  };

  return (
    <ModalContainer>
      <ModalBox flexHeight="0.2">
        <ModalHeader justifyContent="center" flexHeight="0.7">
          <Text>{props.content}</Text>
        </ModalHeader>
        <ModalButton
          flexHeight="0.4"
          backgroundColor="#EEF9E8"
          onPress={() => {
            closeModal(false);
            changePage();
          }}>
          <Text style={{color: '#29582C'}}>확인</Text>
        </ModalButton>
      </ModalBox>
    </ModalContainer>
  );
}
