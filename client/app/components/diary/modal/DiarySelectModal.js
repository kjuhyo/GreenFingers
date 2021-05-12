import {Icon} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Text, Pressable, ActivityIndicator} from 'react-native';
import {myPlantWaterCancel} from '../../../api/plant';

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
  ModalButtonBox,
  Line,
} from '../../../assets/theme/ModalStyle';

export default function DiarySelectModal(props) {
  const [isWater, setIsWater] = useState(false); // 물을 준 상태면 true, 안 준 상태면 false
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = visible => {
    props.setModalVisible(visible);
  };
  const openCheckModal = visible => {
    props.setDateCheckModalVisible(visible);
  };
  const showDiary = val => {
    props.setShowDiary(val);
  };

  // 물주기 취소 api 요청 함수
  const cancelWater = async () => {
    await myPlantWaterCancel(props.waterDateId[props.selectedDate]);
    setIsLoading(false);
    closeModal(false);
  };
  // 선택한 날짜에 물을 줬는지 안줬는지 체크하는 함수
  const checkWaterDate = () => {
    if (props.waterDate.includes(props.selectedDate)) {
      setIsWater(true);
    } else {
      setIsWater(false);
    }
  };

  useEffect(() => {
    checkWaterDate();
  }, []);

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
      <ModalBox flexHeight="0.3">
        <ModalHeader complete>
          <Pressable onPress={() => closeModal(false)}>
            <Icon type="AntDesign" name="close" style={{fontSize: 20}} />
          </Pressable>
        </ModalHeader>

        {/* 다이어리 보기 버튼 */}
        <ModalButtonBox borderRadius="10px">
          <ModalButton
            justifyContent="space-between"
            onPress={() => {
              closeModal(false);
              showDiary(true);
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
              props.navigation.navigate('DiaryWrite', {
                activePlant: `${props.activePlant}`,
                selectedDate: `${props.selectedDate}`,
              });
            }}>
            <Text>다이어리 작성</Text>
            <Icon type="SimpleLineIcons" name="pencil" style={{fontSize: 18}} />
          </ModalButton>
          <Line />

          {/* 물주기 버튼 */}
          <ModalButton
            justifyContent="space-between"
            onPress={() => {
              if (isWater) {
                setIsLoading(true);
                cancelWater();
              } else {
                closeModal(false);
                openCheckModal(true);
              }
            }}>
            <Text style={{color: isWater ? '#F44336' : '#6BABE7'}}>
              {isWater ? '물주기 취소' : '물주기'}
            </Text>
            {isWater ? (
              <Icon
                type="MaterialCommunityIcons"
                name="water-off"
                style={{fontSize: 22}}
              />
            ) : (
              <Icon
                type="Ionicons"
                name="water"
                style={{fontSize: 20, color: '#6BABE7'}}
              />
            )}
          </ModalButton>
        </ModalButtonBox>
        
        {/* indicator 표시 */}
        {renderLoading()}
      </ModalBox>
    </ModalContainer>
  );
}
