import React, {Component} from 'react';
import {useState, useEffect} from 'react';
// import { StatusBar } from "expo-status-bar";
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';

// react navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//stacks
import AuthStack from './AuthStack';
import DiaryStacks from './DiaryStack';
import HomeStacks from './HomeStack';
import RecommendationStacks from './RecommendationStack';
import ProfileStacks from './ProfileStack';

// style
import theme from '../assets/theme/index';
import {ThemeProvider} from 'styled-components';
import {Icon} from 'native-base';

// redux
import {useSelector, useDispatch} from 'react-redux';
import firebase from '../components/auth/firebase';
// import firebase from '@react-native-firebase/app';

import auth from '@react-native-firebase/auth';
import {LoadingScreen} from '../screens/auth/Loading';
import {set} from 'react-native-reanimated';
import {addUid, addUser} from '../reducers/authReducer';
import {setPlants} from '../reducers/plantReducer';
import {userInfo} from '../../app/api/auth';
// mock data
import {tempResponse, tempPlants} from '../components/auth/mockdata';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === '홈') {
            return (
              <Icon
                type="Ionicons"
                name={focused ? 'home-sharp' : 'home-outline'}
                style={{color: focused ? '#8AD169' : '#808285', fontSize: 25}}
              />
            );
          } else if (route.name === '다이어리') {
            return (
              <Icon
                type="Ionicons"
                name="calendar-sharp"
                style={{color: focused ? '#8AD169' : '#808285', fontSize: 25}}
              />
            );
          } else if (route.name === '추천') {
            return (
              <Icon
                type="MaterialCommunityIcons"
                name={focused ? 'thumb-up' : 'thumb-up-outline'}
                style={{color: focused ? '#8AD169' : '#808285', fontSize: 25}}
              />
            );
          } else if (route.name === '프로필') {
            return (
              <Icon
                type="MaterialCommunityIcons"
                name={focused ? 'account' : 'account-outline'}
                style={{color: focused ? '#8AD169' : '#808285', fontSize: 30}}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#8AD169', // 탭 클릭했을 경우 색깔
        inactiveTintColor: '#808285', // 탭 클릭하지 않았을 경우 색깔
        style: {height: 55}, // bottom tab 높이
      }}>
      <Tab.Screen name="홈" component={HomeStacks} />
      <Tab.Screen name="다이어리" component={DiaryStacks} />
      <Tab.Screen name="추천" component={RecommendationStacks} />
      <Tab.Screen name="프로필" component={ProfileStacks} />
    </Tab.Navigator>
  );
}

export default function Root() {
  // const [uid, setUid] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const {uid} = useSelector(state => ({
    uid: state.authReducer.uid,
  }));

  const dispatch = useDispatch();
  const addUserId = uid => dispatch(addUid(uid));
  const curUser = (email, provider) => dispatch(addUser(email, provider));
  const savePlants = plants => dispatch(setPlants(plants));

  printToken = async () => {
    const token = await auth().currentUser.getIdToken(true);
    // console.log(token);
  };

  saveUserInfo = async user => {
    // console.log('user', user);
    if (user) {
      if (user.uid != uid) {
        await addUserId(user.uid);
      }
      const allAboutUser = await userInfo();
      const myPlants = allAboutUser.data.plants;
      const myInfo = allAboutUser.data.response;
      await savePlants(tempPlants);
      // console.log('allaboutuser', allAboutUser.data.plants);
      await curUser(user.email, user.providerData[0].providerId);
      await setIsLoading(false);
    } else {
      addUserId('');
      curUser('', '');
      setIsLoading(false);
    }
  };

  useEffect(async () => {
    // await firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     // printToken();
    //     print('a', user);
    //     if (user.uid != uid) {
    //       addUserId(user.uid);
    //       curUser(user.email, user.providerData[0].providerId);
    //     }
    //     // addUserId('');
    //     // curUser('', '');
    //     setIsLoading(false);
    //   } else {
    //     setIsLoading(false);
    //   }
    // });
    // await printToken();
    await firebase.auth().onAuthStateChanged(saveUserInfo);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="transparent"
        translucent={true}
      />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer>
          {uid ? <Tabs /> : <AuthStack />}
        </NavigationContainer>
      )}
    </ThemeProvider>
  );
}
