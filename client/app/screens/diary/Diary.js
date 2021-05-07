// react
import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

// native-base
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Thumbnail,
  TabHeading,
  View,
  Content,
} from 'native-base';

// library
import {CalendarView} from '../../components/diary/Calendar';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Feed from '../../components/diary/Feed';
import {findAllDiary} from '../../api/diary';
import styled from 'styled-components';

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
  const [activeTab, setActiveTab] = useState(0); // 현재 탭 인덱스
  const [showDiary, setShowDiary] = useState(false); // true: 다이어리, false: 달력
  const [allDiaryState, setAllDiaryState] = useState([]); // 전체 다이어리 목록
  const [diaryDate, setDiaryDate] = useState(); // 현재 선택한 식물의 다이어리 날짜 리스트
  const [selectedDate, setSelectedDate] = useState(); // 선택한 날짜
  const [selectedDiary, setSelectedDiary] = useState(); // 현재 식물의 선택한 날짜의 다이어리 목록

  // 유저의 식물 정보 리덕스에서 가져오기
  const {userPlants} = useSelector(state => ({
    userPlants: state.plantReducer.userPlants,
  }));

  // 현재 선택된 식물 id. 첫번째 식물 아이디를 초기값으로 설정
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

  // 현재 식물의 선택된 날짜에 해당하는 다이어리 목록을 set 해주는 함수
  const diaryList = async () => {
    const activePlantDiary = await Promise.all(
      allDiaryState.map(diary => {
        if (
          diary.plantId === activePlant &&
          selectedDate === diary.writeDateTime.substring(0, 10)
        ) {
          return diary;
        }
      }),
    );
    const filterdList = activePlantDiary.filter(diary => {
      return diary != undefined;
    });
    // console.log('필터 거침', filterdList);
    setSelectedDiary(filterdList);
    // console.log(
    //   '현재 식물의 현재 선택된 날짜의 다이어리 목록',
    //   activePlantDiary,
    // );
  };

  useEffect(() => {
    diaryList();
  }, [selectedDate, activePlant]);
  // console.log('undefined인가?', selectedDiary);

  // 다이어리 보기 눌렀을 경우 피드 목록 렌더링하는 함수
  const feedRendering = () => {
    if (selectedDiary.length != 0) {
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
          <Text style={{color: '#29582C'}}>달력으로 돌아가기</Text>
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
                activeTab == idx
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
            // <Feed selectedDate={selectedDate} navigation={navigation} />
            <CalendarView
              navigation={navigation}
              setShowDiary={setShowDiary}
              diaryDate={diaryDate} // 다이어리 쓴 날짜 리스트
              setSelectedDate={setSelectedDate} // 선택한 날짜 set
            />
          )}
        </ScrollView>
      </Tab>
    ));
  };

  return (
    <Container>
      <Tabs
        locked={true}
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
