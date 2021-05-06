// react
import React, {useState} from 'react';
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
  const [tmpPlantData, setTmpPlantData] = useState([
    {
      pid: 12,
      nickname: '귀여운 선인장',
      name: 'name_test2',
      lastDate: '2021-05-03',
      image:
        'https://atlas-content-cdn.pixelsquid.com/assets_v2/201/2013432544741037094/jpeg-600/G03.jpg?modifiedAt=1',
    },
    {
      pid: 13,
      nickname: '귀여운 잡초',
      name: 'name_test',
      lastDate: '2021-05-03',
      image:
        'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-potted-plants-image_1153974.jpg',
    },
    {
      pid: 13,
      nickname: '귀여운 잡초',
      name: 'name_test',
      lastDate: '2021-05-03',
      image:
        'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-potted-plants-image_1153974.jpg',
    },
  ]);

  const {userPlants} = useSelector(state => ({
    userPlants: state.plantReducer.userPlants,
  }));

  const renderTab = () => {
    return tmpPlantData.map((plant, idx) => (
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
              // {props.activeTab === idx && style={{borderColor: '#29582C', borderWidth: 2}}}
            />
          </TabHeading>
        }>
        <ScrollView style={{backgroundColor: '#F9F9F9'}}>
          <CalendarView navigation={navigation} />
          {/* <Feed navigation={navigation} /> */}
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
        }}>
        {renderTab()}
      </Tabs>
    </Container>
  );
}
