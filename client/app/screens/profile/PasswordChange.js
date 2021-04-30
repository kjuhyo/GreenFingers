import React from 'react';
import {Modal} from 'react-native';

// style
import styled from 'styled-components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CompleteBtn, CompleteBtnText} from '../../assets/theme/DiaryStyle';
import CompleteModal from '../../components/diary/modal/CompleteModal';
import {useState} from 'react';


// 비밀번호 재설정 페이지 전체 컨테이너
const ImgChangeContainer = styled.View`
  height: ${hp('50%')}px;
  padding: 30px;
`;

// (라벨 + 비밀번호 입력창) 영역
const InputBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

`;

// 라벨
const Label = styled.Text`
  flex: 1.5;
`;

// 비밀번호 입력창
const PasswordInput = styled.TextInput`
  flex: 3;
  border: 0.3px solid grey;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
`;


export default function PasswordChange({navigation}) {
  const [completeModalVisible, setCompleteModalVisible] = useState(false);
  const complete = () => {
    navigation.navigate('Profile');
  };

  return (
    <ImgChangeContainer>
      <InputBox>
        <Label>현재 비밀번호</Label>
        <PasswordInput />
      </InputBox>
      <InputBox>
        <Label>새 비밀번호</Label>
        <PasswordInput placeholder="8자 이상 입력해주세요." />
      </InputBox>
      <InputBox>
        <Label>새 비밀번호 확인</Label>
        <PasswordInput placeholder="8자 이상 입력해주세요." />
      </InputBox>
      <CompleteBtn
        flexHeight="0.8"
        marginTop="50px;"
        onPress={() => setCompleteModalVisible(true)}>
        <CompleteBtnText>완료</CompleteBtnText>
      </CompleteBtn>

      {/* 비밀번호 재설정 완료 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={completeModalVisible}
        onRequestClose={() => {
          setCompleteModalVisible(!completeModalVisible);
        }}>
        <CompleteModal
          complete={complete}
          content="비밀번호 재설정 완료"
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>
    </ImgChangeContainer>
  );
}
