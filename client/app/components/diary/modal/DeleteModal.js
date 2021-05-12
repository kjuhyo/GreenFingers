import React, {useState} from 'react';
import {View, Text, _View, ActivityIndicator} from 'react-native';
import {deleteDiary} from '../../../api/diary';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {deletedDiary} from '../../../reducers/diaryReducer';

import {
  ModalContainer,
  ModalHeader,
  ModalButton,
  ModalButtonBox,
  ModalBox,
} from '../../../assets/theme/ModalStyle';

export default function DeleteModal(props) {
  const [isLoading, setIsLoading] = useState(false);
  const closeModal = visible => {
    props.setDeleteModalVisible(visible);
  };
  const openModal = visible => {
    props.setCompleteModalVisible(visible);
  };

  // 디스패치 정의
  const dispatch = useDispatch();

  const isDeleteDiary = deleteddiary => dispatch(deletedDiary(deleteddiary));

  const {deletedDiaryFlag} = useSelector(state => ({
    deletedDiaryFlag: state.diaryReducer.deleteddiary,
  }));

  // 다이어리 삭제 api 요청 함수
  const diaryDelete = async () => {
    await deleteDiary(props.diaryId);
    isDeleteDiary(!deletedDiaryFlag);
    setIsLoading(false); // indicator 없애기
    closeModal(false); // 삭제확인 모달 닫기
    openModal(true); // 삭제완료 모달 열기
  };

  // indicator 렌더링 함수
  const renderLoading = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          size="large"
          color="#8AD169"
          style={{position: 'absolute', left: 0, right: 0, bottom: 0, top: 0}}
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
          <Text>정말 삭제하시겠어요?</Text>
        </ModalHeader>
        <ModalButtonBox
          flexDirection="row"
          flexHeight="0.4"
          style={{backgroundColor: 'rgba(255,255,255, 0.9'}}>
          <ModalButton
            backgroundColor="#F44336"
            onPress={() => {
              setIsLoading(true);
              diaryDelete();
              // closeModal(false);
              // openModal(true);
            }}>
            <Text style={{color: 'white'}}>삭제</Text>
          </ModalButton>
          <ModalButton onPress={() => closeModal(false)}>
            <Text>취소</Text>
          </ModalButton>
        </ModalButtonBox>

        {/* indicator 표시 */}
        {renderLoading()}
      </ModalBox>
    </ModalContainer>
  );
}
