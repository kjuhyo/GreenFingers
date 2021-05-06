// react
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {ScrollView, StyleSheet} from 'react-native';
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
  const [activeTab, setActiveTab] = useState(0);
  const [showDiary, setShowDiary] = useState(false);

  const {userPlants} = useSelector(state => ({
    userPlants: state.plantReducer.userPlants,
  }));

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
            <Feed navigation={navigation} />
          ) : (
            <CalendarView navigation={navigation} setShowDiary={setShowDiary} />
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
          setActiveTab(e.i);
          setShowDiary(false);
        }}>
        {renderTab()}
      </Tabs>
    </Container>
  );
}
