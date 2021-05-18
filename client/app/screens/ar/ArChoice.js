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

const [isSelected, setIsSelected] = useState();
export function ArChoice({navigation}) {
  const Choices = () => {
    return themesAR.map((theme, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => setIsSelected(theme.address)}
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
        {ArChoice()}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  chiptext: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  imagewrap: {
    width: 50,
    height: 50,
    margin: 5,
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
