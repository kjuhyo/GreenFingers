// react
import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

// native-base
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Thumbnail,
  TabHeading,
} from 'native-base';

// library
import {CalendarView} from '../../components/diary/Calendar';

// components
import Feed from '../../components/diary/Feed';
import {findAllDiary} from '../../api/diary';

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
  const [activeTab, setActiveTab] = useState(0); // 현재 탭 인덱스
  const [showDiary, setShowDiary] = useState(false); // true: 달력, false: 다이어리
  const [allDiaryState, setAllDiaryState] = useState([]); // 전체 다이어리 목록
  const [diaryDate, setDiaryDate] = useState(); // 현재 선택한 식물의 다이어리 날짜 리스트
  const [plantDiary, setPlantDiary] = useState();

  // 유저의 식물 정보 리덕스에서 가져오기
  const {userPlants} = useSelector(state => ({
    userPlants: state.plantReducer.userPlants,
  }));

  // 첫번째 식물 아이디를 초기값으로 설정
  const [activePlant, setActivePlant] = useState(userPlants[0].pid);

  // 처음에 다이어리 전체 목록 가져와서 현재 선택된 탭의 식물에 해당하는 다이어리 작성 날짜 리스트 set하는 함수
  const initialDiary = async () => {
    // 1. axios 요청을 통해 전체 다이어리 목록 가져옴
    const allDiary = await findAllDiary();
    setAllDiaryState(allDiary.data.response);

    // 2. 전체 다이어리 목록에서 현재 선택된 탭의 식물 id에 해당하는 다이어리의 작성 날짜 리스트
    const activePlantDate = await Promise.all(
      allDiary.data.response.map(diary => {
        if (diary.plantId === activePlant) {
          return diary.writeDateTime.substring(0, 10);
        }
      }),
    );
    setDiaryDate(activePlantDate);
  };

  useEffect(() => {
    initialDiary();
  }, [activePlant]);

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
                activeTab == idx
                  ? {borderColor: '#29582C', borderWidth: 2}
                  : null
              }
            />
            <Text>
              {plant.nickname} {plant.pid}
            </Text>
          </TabHeading>
        }>
        <ScrollView style={{backgroundColor: '#F9F9F9'}}>
          {showDiary ? (
            <Feed navigation={navigation} />
          ) : (
            <CalendarView
              navigation={navigation}
              setShowDiary={setShowDiary}
              diaryDate={diaryDate} // 다이어리 쓴 날짜 리스트
            />
          )}
        </ScrollView>
      </Tab>
    ));
  };

  return (
    <Container>
      <Tabs
        renderTabBar={renderTabBar}
        onChangeTab={e => {
          // console.log(e);
          setActiveTab(e.i);
          setActivePlant(userPlants[e.i].pid);
          setShowDiary(false);
        }}>
        {renderTab()}
      </Tabs>
    </Container>
  );
}
