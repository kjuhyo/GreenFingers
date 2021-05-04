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
import {
  ModalButtonBox,
  ModalButton1,
  ModalButton,
} from '../../assets/theme/roomstyle';
import RadioButtonRN from 'radio-buttons-react-native';
import axios from 'axios';
import {InputAutoSuggest} from 'react-native-autocomplete-search';

// 글 작성 textInput 박스
const SearchBar = styled.TextInput`
  background-color: white;
  height: 50px;
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
  const [result, setResult] = useState('1');
  useEffect(() => {
    console.log('render');
    axios
      .get(`http://k4c103.p.ssafy.io/green/plant/info`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
      })
      .catch(err => console.log(err));
  });
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
            <TouchableOpacity onPress={() => closeModal(false, 'Cancel')}>
              <Icon
                type="Ionicons"
                name="close-outline"
                style={{color: '#29582C', fontSize: 30}}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.intro}>Dasol님의 식물은</Text>
        </View>
        <View style={styles.modalbody}>
          <View style={styles.listtop}>
            <TouchableOpacity style={styles.plant1}>
              <Image
                source={require('../../assets/images/plant.jpg')}
                style={styles.eximage}
              />
              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>싱고니움</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: 'rgba(0,0,0,0.5)',
                  }}>
                  Syngonium
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.plantinput}>
            <Text style={{marginBottom: 20}}>
              '싱고니움'이 아니라면 직접 입력해주세요
            </Text>
            <Text style={{fontWeight: 'bold'}}>{result}</Text>
            {/* <SearchBar placeholder="   검색어를 입력해 주세요" /> */}
            <InputAutoSuggest
              style={{flex: 1}}
              staticData={[
                {
                  someAttribute: 'val1',
                  details: {
                    id: '1',
                    name: 'Paris',
                    country: 'FR',
                    continent: 'Europe',
                  },
                },
                {
                  someAttribute: 'val2',
                  details: {
                    id: '2',
                    name: 'Pattanduru',
                    country: 'PA',
                    continent: 'South America',
                  },
                },
                {
                  someAttribute: 'val3',
                  details: {
                    id: '3',
                    name: 'Para',
                    country: 'PA',
                    continent: 'South America',
                  },
                },
                {
                  someAttribute: 'val4',
                  details: {
                    id: '4',
                    name: 'London',
                    country: 'UK',
                    continent: 'Europe',
                  },
                },
                {
                  someAttribute: 'val5',
                  details: {
                    id: '5',
                    name: 'New York',
                    country: 'US',
                    continent: 'North America',
                  },
                },
                {
                  someAttribute: 'val6',
                  details: {
                    id: '6',
                    name: 'Berlin',
                    country: 'DE',
                    continent: 'Europe',
                  },
                },
              ]}
              itemFormat={{
                id: 'details.id',
                name: 'details.name',
                tags: ['details.continent', 'details.country'],
              }}
              onDataSelectedChange={data =>
                data !== null ? setResult(data.name) : console.log(data)
              }
            />
          </View>
        </View>
        <View style={styles.last}>
          <Button
            onPress={() => closeModal(false, 'Cancel')}
            style={styles.lastbtn}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
              완료
            </Text>
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
    flex: 0.3,
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
  intro: {
    fontSize: 30,
    marginLeft: 40,
    marginTop: 40,
    fontWeight: 'bold',
  },
  plant1: {
    backgroundColor: '#F2F5E1',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 35,
    flexDirection: 'row',
    height: 170,
  },
  eximage: {
    width: 100,
    height: 120,
    borderRadius: 10,
  },
  listbottom: {
    flexDirection: 'row',
  },
  plant2: {
    backgroundColor: 'rgba(52,176,80,0.2)',
    flex: 1,
    marginLeft: 30,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plant3: {
    backgroundColor: 'red',
    flex: 1,
    marginRight: 40,
    marginLeft: 10,
  },
  plantinput: {
    margin: 30,
  },
  last: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lastbtn: {
    width: 100,
    backgroundColor: '#29582C',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
export {PlantIdentification};
