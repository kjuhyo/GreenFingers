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
const PlantIdentification = props => {
  const closeModal = (bool, data) => {
    props.changeModalVisible(bool);
    props.setData(data);
  };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.modaltop}>
          <Text style={styles.titletext}>식물 판별</Text>
          <View style={styles.close}>
            <TouchableOpacity
              onPress={() => closeModal(false, 'Cancel')}
              style={styles.closebtn}>
              <Icon
                type="Ionicons"
                name="close-outline"
                style={{color: '#29582C', fontSize: 40}}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.modalbody}></View>
        <View>
          <Button onPress={() => closeModal(false, 'Cancel')}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>완료</Text>
          </Button>
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
    width: WIDTH,
    height: HEIGHT_MODAL,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
  },
  modaltop: {
    flex: 0.1,
    borderBottomColor: 'green',
    borderBottomWidth: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titletext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#29582C',
    marginLeft: 10,
  },
  close: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
});
export {PlantIdentification};
