import React, {useEffect} from 'react';
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
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// GoogleSignin.configure({});
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

  const dispatch = useDispatch();
  const addUserId = uid => dispatch(addUid(uid));

  const signOut = async () => {
    try {
      const user = await firebase.auth().currentUser.providerData[0];
      const provider = user.providerId;
      console.log('logout user', user);
      if (provider === 'google.com') {
        // await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      } else {
        await firebase.auth().signOut();
      }
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
            changePage();
          }}>
          <Text style={{color: '#29582C'}}>확인</Text>
        </ModalButton>
      </ModalBox>
    </ModalContainer>
  );
}
