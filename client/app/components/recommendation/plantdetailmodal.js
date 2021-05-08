import {Icon} from 'native-base';
import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

import {recomPlantDetail} from '../../api/recommendation';
import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalButton,
  ModalButtonBox,
  Line,
} from '../../assets/theme/ModalStyle';
import plant from '../../reducers/plantReducer';

export default function plantdetailmodal(props) {
  const [plant, setPlant] = useState('');
  const closeModal = visible => {
    props.setModalVisible(visible);
  };

  const savePlant = async () => {
    const plant = await recomPlantDetail(props.plantId);
    setPlant(plant.data);
  };

  useEffect(async () => {
    await savePlant();
  }, [props]);

  console.log('modal props', props);
  return (
    <ModalContainer>
      <ModalBox flexHeight="0.9" modalWidth="90%">
        <ModalHeader complete flexHeight="0.04">
          <Pressable onPress={() => closeModal(false)}>
            <Icon type="AntDesign" name="close" style={{fontSize: 20}} />
          </Pressable>
        </ModalHeader>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            width: '100%',
            height: '100%',
          }}>
          <Image
            style={styles.plantimage}
            source={{
              uri:
                'https://i.pinimg.com/564x/14/cf/f1/14cff1d62ef6a6e0d123e18f7e4565db.jpg',
            }}
          />
          <View style={styles.plantdescription}>
            <Text style={styles.plantinfo}>학명 : {plant.common}</Text>
            <Text style={styles.plantinfo}>이름 : {plant.name}</Text>
            <Text style={styles.plantinfo}>키우기 난이도 : {plant.level}</Text>
            <Text style={styles.plantinfo}>적정습도 : {plant.humid}</Text>
            <Text style={styles.plantinfo}>물 주기 : {plant.water}</Text>
          </View>
        </View>
      </ModalBox>
    </ModalContainer>
  );
}

const styles = StyleSheet.create({
  plantimage: {
    alignSelf: 'stretch',
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    resizeMode: 'contain',
    borderRadius: 5,
    transform: [{scale: 1.1}],
  },
  plantdescription: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 15,
  },
  plantinfo: {
    color: 'black',
    // width: '80%',
    fontSize: 20,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 7,
    marginHorizontal: 15,
    backgroundColor: '#EEF9E8',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
});
