import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Button, Icon} from 'native-base';
import styled from 'styled-components';
import {
  ModalButtonBox,
  ModalButton1,
  ModalButton,
} from '../../assets/theme/roomstyle';
import {myPlantDead} from '../../api/plant';
import {useDispatch} from 'react-redux';
import {changePlant} from '../../reducers/roomReducer';

// 글 작성 textInput 박스
const TextInputBox = styled.View`
  background-color: white;
  height: 50px;
  margin: 20px 20px 10px 20px;
  padding: 10px;
  border: 0.4px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
const AddButton = styled.TouchableOpacity`
  height: 40px;
  margin-top: 4px;
  margin-bottom: 10px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const HEIGHT_MODAL = 300;
const ByePlant = props => {
  const closeModal = (bool, data) => {
    props.changeModalVisible(bool);
    props.setData(data);
  };
  const pid = props.pid;
  const pname = props.pname;
  // redux
  const dispatch = useDispatch();
  const plantchange = () => dispatch(changePlant('bye'));
  // 식물 떠나감
  const plantDead = async () => {
    await myPlantDead(pid);
    plantchange();
    closeModal(false, 'Delete');
  };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.modaltop}>
          <TouchableOpacity
            onPress={() => closeModal(false, 'Cancel')}
            style={styles.closebtn}>
            <Icon
              type="Ionicons"
              name="close-outline"
              style={{color: 'green', fontSize: 40}}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.question}>
          <Text
            style={{
              color: 'rgba(0,0,0,0.3)',
              fontWeight: 'bold',
              // marginLeft: 10,
              fontSize: 12,
              fontWeight: '500',
            }}>
            *떠나간 식물은 복구할 수 없습니다.
          </Text>
          <Text
            style={{
              color: 'rgba(0,0,0,0.5)',
              fontWeight: 'bold',
              // marginLeft: 10,
              fontSize: 15,
              fontWeight: '700',
            }}>
            {pname}의 상태를 떠나감으로 변경하시겠습니까?
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonbox}>
            <ModalButton
              onPress={() => {
                plantDead();
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>떠나감</Text>
            </ModalButton>
            <ModalButton1 onPress={() => closeModal(false, 'Cancel')}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>취소</Text>
            </ModalButton1>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modal: {
    // height: HEIGHT - 100,
    paddingTop: 10,
    width: WIDTH - 120,
    flex: 0.3,
    backgroundColor: 'white',
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
  },
  modaltop: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 18,
    width: WIDTH - 120,
  },
  question: {
    flex: 1.4,
    // backgroundColor: 'red',
    marginHorizontal: 27,
    paddingHorizontal: 10,
  },
  buttons: {
    flex: 1.5,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonbox: {
    flex: 1,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {ByePlant};
