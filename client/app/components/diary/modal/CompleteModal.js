import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
} from '../../../assets/theme/ModalStyle';

import LottieView from 'lottie-react-native';
import {set} from 'react-native-reanimated';

export default function CompleteModal(props) {
  const closeModal = visible => {
    props.setCompleteModalVisible(visible);
  };

  // 완료 버튼 눌렀을 때 페이지 이동이 필요한 경우
  const changePage = () => {
    if (props.complete !== undefined) {
      return props.complete();
    }
  };

  // 완료 버튼 눌렀을 때 로그아웃 할 경우
  const logout = () => {
    if (props.signOut !== undefined) {
      return props.signOut();
    }
  };

  const animation = () => {
    if (props.animation) {
      return (
        <LottieView
          source={require('../../../assets/animation/raindrop.json')}
          autoPlay
          loop
          style={
            ({
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            },
            styles.contentimg)
          }
        />
      );
    } else {
      return null;
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
            logout();
            closeModal(false);
            changePage();
          }}>
          <Text style={{color: '#29582C'}}>확인</Text>
        </ModalButton>
      </ModalBox>
      {animation()}
    </ModalContainer>
  );
}

const styles = StyleSheet.create({
  contentimg: {
    width: '100%',
    paddingVertical: 5,
    zIndex: -1,
    position: 'absolute',
  },
});
