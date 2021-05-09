import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Container, Icon, Button, Content} from 'native-base';
import {PlusModal} from '../../components/main/PlusModal';
import {RoomEditModal} from '../../components/main/RoomEditModal';
import {DeleteRoomModal} from '../../components/main/DeleteRoomModal';
const win = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';
import {findRoomDetail} from '../../api/room';

export function RoomScreen({route, navigation}) {
  const {plantnum} = useSelector(state => ({
    plantnum: state.roomReducer.plantnum,
  }));
  const [isModalVisible, setisModalVisible] = useState(false);
  const [isModalVisible2, setisModalVisible2] = useState(false);
  const [isModalVisible3, setisModalVisible3] = useState(false);
  const [ChooseData, setChooseData] = useState();
  const [title, setTitle] = useState('');
  const [roomDetail, setRoomDetail] = useState();
  const [loading, setLoading] = useState(true);
  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };
  const changeModalVisible2 = bool => {
    setisModalVisible2(bool);
  };
  const changeModalVisible3 = bool => {
    setisModalVisible3(bool);
  };
  const setData = data => {
    setChooseData(data);
  };
  console.log(ChooseData);
  // plantList 안에든거 image, lastDate, name, nickname, pid
  const {rid} = route.params;
  const {rname} = route.params;
  const {plantList} = route.params;
  const getPlantData = async () => {
    await findRoomDetail(rid)
      .then(res => {
        console.log('axios', res.data.response);
        setRoomDetail(res.data.response);
      })
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        console.log('axios', err);
        setLoading(false);
      });
  };
  useEffect(async () => {
    await getPlantData();
    if (ChooseData === 'Delete') {
      navigation.navigate('Home');
    }
  }, [plantnum]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.plantcard}
        onPress={() => {
          navigation.navigate('PlantDetail', {
            pid: item.pid,
            pname: item.nickname,
          });
        }}>
        <Image source={{uri: item.image}} style={styles.plantimg} />
        <View style={styles.plantinfo}>
          <Text style={styles.plantname}>{item.nickname}</Text>
          <Text style={styles.plantname}>{item.dead}</Text>
          <View style={styles.rightinfo}>
            <View style={styles.water}>
              <Text style={styles.watertext}>물 준 날짜</Text>
              <Text style={styles.waterdate}>{item.lastDate}</Text>
            </View>
            <Image
              source={require('../../assets/images/plant1.png')}
              style={styles.planticon}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {loading ? (
        <View>
          <Text>로딩중</Text>
        </View>
      ) : (
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
          {/* 배경사진 */}
          <View style={{flex: 0.1}}>
            <Image
              style={{
                height: win.height,
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              source={require('../../assets/images/mainroom.jpg')}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 40}}>
            {/* 방 이름 */}
            <TouchableOpacity
              style={styles.roomname}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Icon
                type="Ionicons"
                name="chevron-back-outline"
                style={{color: 'white', fontSize: 20, paddingRight: 8}}></Icon>
              <Text style={styles.roomtext}>{rname}</Text>
            </TouchableOpacity>
            <View style={styles.setting}>
              <TouchableOpacity onPress={() => changeModalVisible3(true)}>
                <Icon
                  type="Ionicons"
                  name="trash-outline"
                  style={{
                    color: 'white',
                    fontSize: 25,
                    paddingRight: 15,
                  }}></Icon>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible3}
                nRequestClose={() => changeModalVisible3(false)}
                style={styles.plantmodal}>
                <DeleteRoomModal
                  changeModalVisible={changeModalVisible3}
                  setData={setData}
                  rid={rid}
                  rname={rname}
                />
              </Modal>
              <TouchableOpacity onPress={() => changeModalVisible2(true)}>
                <Icon
                  type="Ionicons"
                  name="options-outline"
                  style={{
                    color: 'white',
                    fontSize: 25,
                    paddingRight: 15,
                  }}></Icon>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible2}
                nRequestClose={() => changeModalVisible2(false)}
                style={styles.plantmodal}>
                <RoomEditModal
                  changeModalVisible={changeModalVisible2}
                  setData={setData}
                />
              </Modal>
            </View>
          </View>
          {/* 식물 목록 */}
          <View style={styles.plantlist}>
            <SafeAreaView>
              <FlatList
                data={roomDetail.plantList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                nestedScrollEnabled
              />
            </SafeAreaView>

            <TouchableOpacity style={styles.pluscard}>
              <TouchableOpacity onPress={() => changeModalVisible(true)}>
                <Icon
                  type="Ionicons"
                  name="add-circle-outline"
                  style={styles.addicon}></Icon>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                nRequestClose={() => changeModalVisible(false)}>
                <PlusModal
                  changeModalVisible={changeModalVisible}
                  setData={setData}
                  rid={rid}></PlusModal>
              </Modal>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  roomname: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 25,
    marginBottom: 20,
    alignItems: 'center',
    flex: 1,
  },
  setting: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
    flex: 1,
    // backgroundColor: "yellow",
  },
  plantlist: {
    flex: 6,
    paddingHorizontal: 15,
  },
  roomtext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  plantcard: {
    margin: 3,
    height: win.height * 0.2,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // alignItems: "center",
  },
  pluscard: {
    margin: 3,
    height: win.height * 0.2,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantname: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  plantimg: {
    height: 100,
    width: null,
    // marginTop: 10,
    borderRadius: 10,
    // marginHorizontal: 10,
    // alignItems: "center",
  },
  plantinfo: {
    flexDirection: 'row',
    // backgroundColor: "red",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  planticon: {
    height: 30,
    width: 30,
  },
  rightinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: "yellow",
  },
  watertext: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  waterdate: {
    fontSize: 9,
  },
  pencil: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.8)',
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginLeft: 10,
    padding: 2,
  },
  addicon: {
    fontSize: 50,
    color: 'rgba(255,255,255,0.7)',
  },
});
