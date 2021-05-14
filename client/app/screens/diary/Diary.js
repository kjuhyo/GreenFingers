// react
import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {ScrollView, Text, TouchableOpacity} from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {updateActivePlant} from '../../reducers/diaryReducer';

// style
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Thumbnail,
  TabHeading,
  View,
  Root,
} from 'native-base';
import styled from 'styled-components';

// library
import {CalendarView} from '../../components/diary/Calendar';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Feed from '../../components/diary/Feed';

//api
import {findAllDiary, findDiaryByDate} from '../../api/diary';
import {myPlantWaterInfo} from '../../api/plant';

// const PlusButton = styled.TouchableOpacity`
//   width: 50px;
//   height: 50px;
//   border-radius: 30px;
//   background-color: ${({theme}) => theme.colors.darkGreen};
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   bottom: 20px;
//   right: 20px;
// `;

// 작성된 다이어리 없다는 문구 컨테이너
const TextContainer = styled.View`
  height: ${hp('75%')}px;
  align-items: center;
  justify-content: center;
`;

const renderTabBar = props => {
  props.tabStyle = Object.create(props.tabStyle);
  // props.style = Object.create(props.style);
  // props.tabsContainerStyle = Object.create(
  //   props.tabsContainerStyle,
  //   // backgroundColor: '#F9F9F9',
  // );

  // props.style = Object.create(props.style);

  // console.log(props);
  // props.underlineStyle = Object.create({
  //   height: 0,
  // });
  return (
    <ScrollableTab
      {...props}
      tabsContainerStyle={{justifyContent: 'flex-start'}}
      underlineStyle={{height: 0}}
      style={{height: 65, borderWidth: 0, backgroundColor: '#F9F9F9'}}
    />
  );
};

export function DiaryScreen({navigation}) {
  const [showDiary, setShowDiary] = useState(false); // true: 다이어리, false: 달력
  const [diaryDate, setDiaryDate] = useState(); // 현재 선택한 식물의 다이어리 날짜 리스트
  const [selectedDate, setSelectedDate] = useState(); // 선택한 날짜
  const [selectedDiary, setSelectedDiary] = useState(); // 현재 식물의 선택한 날짜의 다이어리 목록
  const [waterDate, setWaterDate] = useState(); // [물준날짜1, 물준날짜2, ...]
  const [waterDateId, setWaterDateId] = useState(); // {물준날짜1: wid, 물준날짜:2, ...}

  // 디스패치 정의
  const dispatch = useDispatch();

  // 활성화된 탭의 식물 아이디와 탭 인덱스 디스패치
  const setActivePlantTab = (pid, tabidx) =>
    dispatch(updateActivePlant(pid, tabidx));

  // 현재 선택된 탭의 식물 id
  const {activePlantId} = useSelector(state => ({
    activePlantId: state.diaryReducer.pid,
  }));

  // 현재 선택된 탭의 인덱스
  const {activePlantTabIdx} = useSelector(state => ({
    activePlantTabIdx: state.diaryReducer.tabidx,
  }));

  // 리덕스에서 상태 가져오기
  // 유저의 식물 정보
  const {userPlants} = useSelector(state => ({
    userPlants: state.plantReducer.userPlants,
  }));
  // 다이어리 작성 상태
  const {writeFlag} = useSelector(state => ({
    writeFlag: state.diaryReducer.registerdiary,
  }));
  // 다이어리 수정 상태
  const {modifyFlag} = useSelector(state => ({
    modifyFlag: state.diaryReducer.modifydiary,
  }));
  // 다이어리 삭제 상태
  const {deleteFlag} = useSelector(state => ({
    deleteFlag: state.diaryReducer.deleteddiary,
  }));
  // 물주기 상태
  const {registerWaterFlag} = useSelector(state => ({
    registerWaterFlag: state.diaryReducer.registerwater,
  }));
  // 물주기 취소 상태
  const {deleteWaterFlag} = useSelector(state => ({
    deleteWaterFlag: state.diaryReducer.deletewater,
  }));
  // 식물 등록/삭제 상태(미사용)
  const {plantact} = useSelector(state => ({
    plantact: state.roomReducer.plantact,
  }));

  // 보유 식물이 있을 경우에만 activePlant 값 설정
  const isPlant = () => {
    if (userPlants.length == 0) {
      setActivePlantTab(undefined, 0);
    } else {
      setActivePlantTab(userPlants[0].pid, 0);
    }
  };

  useEffect(() => {
    if (activePlantId == -1) {
      isPlant();
    }
  }, []);

  // 처음에 다이어리 전체 목록 가져와서 현재 선택된 탭의 식물에 해당하는 다이어리 작성 날짜 리스트 set하는 함수
  const initialDiary = async () => {
    // 1. axios 요청을 통해 전체 다이어리 목록 가져옴
    const allDiary = await findAllDiary();

    // 2. 전체 다이어리 목록에서 현재 선택된 탭의 식물 id에 해당하는 다이어리의 작성 날짜 리스트
    const activePlantDate = await Promise.all(
      allDiary.data.response.map(diary => {
        if (diary.plantId === activePlantId) {
          return diary.writeDateTime.substring(0, 10);
        }
      }),
    );
    setDiaryDate(activePlantDate);
  };

  // 물 준 날짜 조회 api 호출 후 물 준 날짜 set하는 함수
  const getWaterDate = async () => {
    const waterInfo = await myPlantWaterInfo(activePlantId);

    // api 응답에서 날짜만 추출
    if (waterInfo.data.length != 0) {
      const cutWaterDateId = {};

      const cutDate = await Promise.all(
        waterInfo.data.map(water => {
          cutWaterDateId[water.waterDate.substring(0, 10)] = water.wid;
          return water.waterDate.substring(0, 10);
        }),
      );
      setWaterDate(cutDate);
      setWaterDateId(cutWaterDateId);
    } else {
      setWaterDate([]);
    }
  };

  // 탭이 바뀔때마다 비워주고 다시 set
  useEffect(() => {
    if (userPlants.length != 0 && activePlantId != -1) {
      setDiaryDate([]); // 비워주고
      setWaterDate([]); // 비워주고
      initialDiary(); // 다시 set
      getWaterDate(); // 다시 set
    }
  }, [
    activePlantId,
    writeFlag,
    modifyFlag,
    deleteFlag,
    registerWaterFlag,
    deleteWaterFlag,
  ]);

  // 현재 식물의 선택된 날짜에 해당하는 다이어리 목록을 set 해주는 함수
  const diaryList = async () => {
    if (selectedDate) {
      const diaryByDate = await findDiaryByDate(selectedDate);
      const diaryByDateRes = diaryByDate.data.response;

      // 현재 선택된 식물의 다이어리만 가져오기
      if (diaryByDateRes.length != 0) {
        const activePlantDiary = await Promise.all(
          diaryByDateRes.map(diary => {
            if (diary.plantId === activePlantId) {
              return diary;
            }
          }),
        );

        // undefined 제거
        const fileterdList = activePlantDiary.filter(diary => {
          return diary != undefined;
        });

        // 해당되는 다이어리 목록을 set
        setSelectedDiary(fileterdList);
      } else {
        setSelectedDiary(undefined);
      }
    }
  };

  useEffect(() => {
    if (userPlants.length != 0 && activePlantId != -1) {
      diaryList();
    }
  }, [
    selectedDate,
    activePlantId,
    modifyFlag,
    deleteFlag,
    registerWaterFlag,
    deleteWaterFlag,
  ]);

  useEffect(() => {
    if (showDiary) {
      feedRendering();
    }
  }, [modifyFlag, deleteFlag]);

  // 다이어리 보기 눌렀을 경우 피드 목록 렌더링하는 함수
  const feedRendering = () => {
    if (selectedDiary != undefined && selectedDiary.length != 0) {
      return selectedDiary.map((diary, idx) => (
        <Feed
          key={idx}
          selectedDate={selectedDate}
          navigation={navigation}
          diary={diary}
        />
      ));
    }
    return (
      <TextContainer>
        <Text style={{color: 'black', fontSize: 18}}>
          {selectedDate.substring(0, 4)}년 {selectedDate.substring(5, 7)}월{' '}
          {selectedDate.substring(8, 10)}일에 작성된 다이어리가 없어요.
        </Text>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => setShowDiary(false)}>
          <Text style={{color: '#29582C', fontSize: 15, fontWeight: 'bold'}}>
            달력으로 돌아가기
          </Text>
        </TouchableOpacity>
      </TextContainer>
    );
  };

  const renderTab = () => {
    return userPlants.map((plant, idx) => (
      <Tab
        key={idx}
        // tabStyle={{backgroundColor: '#F9F9F9'}}
        // tabsContainerStyle={{justifyContent: 'flex-start'}}
        heading={
          <TabHeading
            style={{
              backgroundColor: '#F9F9F9',
              width: 85,
              borderBottomWidth: 0,
            }}>
            <Thumbnail
              source={{
                uri: plant.image,
              }}
              style={
                activePlantTabIdx == idx
                  ? {borderColor: '#29582C', borderWidth: 2}
                  : null
              }
            />
          </TabHeading>
        }>
        <ScrollView style={{backgroundColor: '#F9F9F9'}}>
          {showDiary ? (
            feedRendering()
          ) : (
            <CalendarView
              navigation={navigation}
              setShowDiary={setShowDiary}
              diaryDate={diaryDate} // 다이어리 쓴 날짜 리스트
              waterDate={waterDate} // 물 준 날짜 리스트
              waterDateId={waterDateId} // 물 준 날짜와 wid 객체
              setSelectedDate={setSelectedDate} // 선택한 날짜 set
              selectedDate={selectedDate} // 선택한 날짜
              activePlant={activePlantId} // 선택한 식물 id
            />
          )}
        </ScrollView>
      </Tab>
    ));
  };

  return (
    <Root>
      <Container>
        {userPlants.length == 0 ? (
          <View
            style={{
              flex: 1,
              backgroundColor: '#F9F9F9',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18}}>아직 등록된 식물이 없어요.</Text>
            <Text style={{fontSize: 18}}>
              식물을 등록하고 다이어리를 관리해보세요🌻
            </Text>
            <TouchableOpacity
              style={{marginTop: 15}}
              onPress={() => navigation.navigate('Home')}>
              <Text
                style={{color: '#29582C', fontWeight: 'bold', fontSize: 17}}>
                식물 등록하러 가기
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Tabs
            locked={true}
            renderTabBar={renderTabBar}
            onChangeTab={e => {
              setActivePlantTab(userPlants[e.i].pid, e.i);
              setShowDiary(false);
            }}>
            {renderTab()}
          </Tabs>
        )}
      </Container>
    </Root>
  );
}
