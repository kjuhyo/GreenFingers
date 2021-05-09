import React, {useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {myPlantWaterRegister} from '../../../api/plant';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButtonBox,
  ModalButton,
} from '../../../assets/theme/ModalStyle';

export default function CheckDateModal(props) {
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = visible => {
    props.setDateCheckModalVisible(visible);
  };
  const openCompleteModal = visible => {
    props.setCompleteModalVisible(visible);
  };

  // 물주기 api 요청 함수
  const waterRegister = async () => {
    const selectDate =
      props.selectYear + '-' + props.selectMonth + '-' + props.selectDay;
    const params = {pid: props.activePlant, waterDate: selectDate};

    await myPlantWaterRegister(params);
    setIsLoading(false);
    closeModal(false);
    openCompleteModal(true);
  };

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
          <Text>
            {props.selectYear}년 {props.selectMonth}월 {props.selectDay}일에
            물을 주었나요?
          </Text>
        </ModalHeader>
        <ModalButtonBox flexDirection="row" flexHeight="0.4">
          <ModalButton
            onPress={() => {
              closeModal(false);
            }}>
            <Text>취소</Text>
          </ModalButton>
          <ModalButton
            backgroundColor="#EEF9E8"
            onPress={() => {
              setIsLoading(true);
              waterRegister();
            }}>
            <Text style={{color: '#29582c'}}>네</Text>
          </ModalButton>
        </ModalButtonBox>
        {renderLoading()}
      </ModalBox>
    </ModalContainer>
  );
}
