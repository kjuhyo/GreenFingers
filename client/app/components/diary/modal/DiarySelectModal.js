import {Icon} from 'native-base';
import React from 'react';
import {Text, Pressable} from 'react-native';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
  ModalButtonBox,
  Line,
} from '../../../assets/theme/DiaryStyle';

export default function DiarySelectModal(props) {
  const closeModal = visible => {
    props.setModalVisible(visible);
  };
  const openCheckModal = visible => {
    props.setDateCheckModalVisible(visible);
  };

  return (
    <ModalContainer>
      <ModalBox flexHeight="0.3">
        <ModalHeader complete>
          <Pressable onPress={() => closeModal(false)}>
            <Icon type="AntDesign" name="close" style={{fontSize: 20}} />
          </Pressable>
        </ModalHeader>

        {/* 다이어리 보기 버튼 */}
        <ModalButtonBox borderRadius="10px" backgroundColor="#F9F9F9">
          <ModalButton
            justifyContent="space-between"
            onPress={() => {
              closeModal(false);
            }}>
            <Text>다이어리 보기</Text>
            <Icon type="Octicons" name="book" style={{fontSize: 20}} />
          </ModalButton>
          <Line />

          {/* 다이어리 작성 버튼 */}
          <ModalButton
            justifyContent="space-between"
            onPress={() => {
              closeModal(false);
              props.navigation.navigate('DiaryWrite');
            }}>
            <Text>다이어리 작성</Text>
            <Icon type="SimpleLineIcons" name="pencil" style={{fontSize: 18}} />
          </ModalButton>
          <Line />

          {/* 물주기 버튼 */}
          <ModalButton
            justifyContent="space-between"
            onPress={() => {
              closeModal(false);
              openCheckModal(true);
            }}>
            <Text style={{color: '#6BABE7'}}>물주기</Text>
            <Icon
              type="Ionicons"
              name="water"
              style={{fontSize: 20, color: '#6BABE7'}}
            />
          </ModalButton>
        </ModalButtonBox>
      </ModalBox>
    </ModalContainer>
  );
}
