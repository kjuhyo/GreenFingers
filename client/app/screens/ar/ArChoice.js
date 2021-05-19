import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {Button, Icon} from 'native-base';
import styled from 'styled-components';
import {Littlechip} from '../../assets/theme/roomstyle';
import {themesAR} from '../../assets/theme/arTheme';
import {changeRoomNameTheme} from '../../api/room';

export function ArChoice({navigation}) {
  const [isSelected, setIsSelected] = useState(
    'https://ssafybucket.s3.ap-northeast-2.amazonaws.com/arplant1.jpg',
  );
  const [isSelectedAr, setIsSelectedAr] = useState('arplant1');
  const Choices = () => {
    return themesAR.map((theme, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => {
            setIsSelected(theme.address);
            setIsSelectedAr(theme.name);
          }}
          style={styles.imagewrap}>
          <Image
            source={{
              uri: theme.address,
            }}
            style={
              isSelected === theme.address ? styles.selected : styles.themeimg
            }
          />
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={styles.photo}>
      <Littlechip>
        <Text style={styles.chiptext}>AR 선택</Text>
      </Littlechip>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          paddingHorizontal: 15,
        }}>
        {Choices()}
      </View>
      <Button
        onPress={() => {
          console.log('click');
          navigation.navigate('ArIntro', {
            arname: isSelectedAr,
          });
        }}
        style={styles.gobtn}>
        <Text>Go!</Text>
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  gobtn: {
    marginLeft: 20,
    width: 100,
    backgroundColor: 'red',
  },
  chiptext: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  photo: {
    flex: 3,
  },
  imagewrap: {
    width: 50,
    height: 50,
    margin: 5,
  },
  themeimg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderColor: 'transparent',
    resizeMode: 'cover',
    borderWidth: 2,
  },
  selected: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
    borderColor: '#8AD169',
    borderWidth: 2,
  },
});
