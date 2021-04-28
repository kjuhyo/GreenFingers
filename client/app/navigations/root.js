import React, {Component} from 'react';
import {useState} from 'react';
// import { StatusBar } from "expo-status-bar";
import {StatusBar} from 'react-native';

import {StyleSheet, Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';

// react navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//stacks
import AuthStack from './AuthStack';
import DiaryStacks from './DiaryStack';
import HomeStacks from './HomeStack';
import RecommendationStacks from './RecommendationStack';

// screen
import {HomeScreen} from '../screens/main/Home';
import {RoomScreen} from '../screens/main/Room';
import {PlantDetail} from '../screens/main/PlantDetail';

import {LoginScreen} from '../screens/auth/Login';
import {SignupScreen} from '../screens/auth/Signup';
import {AddinfoScreen} from '../screens/auth/Addinfo';

import {DiaryScreen} from '../screens/diary/Diary';
import {DiaryWriteScreen} from '../screens/diary/DiaryWrite';
import {DiaryUpdateScreen} from '../screens/diary/DiaryUpdate';

import {SurveyintroScreen} from '../screens/recommendation/SurveyIntro';
import {SurveyquestionScreen} from '../screens/recommendation/SurveyQ';
import {SurveyresultScreen} from '../screens/recommendation/SurveyResult';

// style
import theme from '../assets/theme/index';
import {ThemeProvider} from 'styled-components';
import {Icon} from 'native-base';

// redux

import allReducer from '../reducers/index.js';

import {Provider as StoreProvider, useDispatch, useSelector} from 'react-redux';

import {connect} from 'react-redux';
import authReducer from '../reducers/authReducer';
import {set} from 'react-native-reanimated';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const RecommendationStack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStacks} />
      <Tab.Screen name="Diary" component={DiaryStacks} />
      <Tab.Screen name="Recommendation" component={RecommendationStacks} />
    </Tab.Navigator>
  );
}

export default function Root() {
  const {isLoggedIn} = useSelector(state => ({
    isLoggedIn: state.authReducer.isLoggedIn,
  }));

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        {isLoggedIn ? <Tabs /> : <AuthStack />}
      </NavigationContainer>
    </ThemeProvider>
  );
}
