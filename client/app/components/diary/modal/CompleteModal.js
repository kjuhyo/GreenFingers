import React from 'react';
import {Text} from 'react-native';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
} from '../../../assets/theme/ModalStyle';

//redux, firebase, google
import {useSelector, useDispatch} from 'react-redux';
import {addUid} from '../../../reducers/authReducer';
import auth from '@react-native-firebase/auth';
import firebase from '../../../components/auth/firebase';

export default function CompleteModal(props) {
  const closeModal = visible => {
    props.setCompleteModalVisible(visible);
  };

  const dispatch = useDispatch();
  const addUserId = uid => dispatch(addUid(uid));

  const signOut = async () => {
    try {
      const result = await firebase.auth().signOut();
      // console.log(result);
      // await closeModal(false);
      await addUserId('');
    } catch (error) {
      console.error(error);
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
            signOut();
            closeModal(false);
          }}>
          <Text>확인</Text>
        </ModalButton>
      </ModalBox>
    </ModalContainer>
  );
}
