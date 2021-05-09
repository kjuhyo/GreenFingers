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
import {myPlantDelete} from '../../api/plant';
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
const DeletePlant = props => {
  const pid = props.pid;
  const pname = props.pname;
  const closeModal = (bool, data) => {
    props.changeModalVisible(bool);
    props.setData(data);
  };
  const dispatch = useDispatch();
  const plantchange = () => dispatch(changePlant());
  // 식물 삭제
  const plantDelete = async () => {
    await myPlantDelete(pid);
    await plantchange();
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
              color: 'rgba(0,0,0,0.5)',
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            {pname} 을 삭제하시겠습니까?
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonbox}>
            <ModalButton
              onPress={() => {
                plantDelete();
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>삭제</Text>
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
    paddingVertical: 6,
    paddingHorizontal: 14,
    width: WIDTH - 120,
  },
  question: {
    flex: 0.3,
    // backgroundColor: 'red',
    marginHorizontal: 20,
  },
  buttons: {
    flex: 2,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  buttonbox: {
    flex: 0.6,
    // backgroundColor: 'green',
    flexDirection: 'row',
  },
});
export {DeletePlant};
