// react
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import {ScrollView} from 'react-native';
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
  props.tabsContainerStyle = Object.create({
    justifyContent: 'flex-start',
    backgroundColor: '#F9F9F9',
  });

  props.underlineStyle = Object.create({height: 2, backgroundColor: '#8AD169'});
  return <ScrollableTab />;
};
export function DiaryScreen({navigation}) {
  const {userPlants} = useSelector(state => ({
    userPlants: state.plantReducer.userPlants,
  }));

  console.log(userPlants);
  return (
    <Container>
      <Tabs renderTabBar={renderTabBar}>
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: '#F9F9F9',
              }}>
              <Thumbnail
                small
                source={{
                  uri:
                    'http://cereshome.co.kr/web/product/small/20200420/659ff6db3048df1a413a053655c22ebb.jpg',
                }}
              />
            </TabHeading>
          }>
          <ScrollView style={{backgroundColor: '#F9F9F9'}}>
            <CalendarView navigation={navigation} />
            <Feed navigation={navigation} />
          </ScrollView>
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: '#F9F9F9',
              }}>
              <Thumbnail
                small
                source={{
                  uri:
                    'http://cereshome.co.kr/web/product/small/20200420/659ff6db3048df1a413a053655c22ebb.jpg',
                }}
              />
            </TabHeading>
          }>
          <CalendarView navigation={navigation} />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: '#F9F9F9',
              }}>
              <Thumbnail
                small
                source={{
                  uri:
                    'http://cereshome.co.kr/web/product/small/20200420/659ff6db3048df1a413a053655c22ebb.jpg',
                }}
              />
            </TabHeading>
          }>
          <CalendarView />
        </Tab>
      </Tabs>
    </Container>
  );
}
