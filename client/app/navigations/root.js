import React, {Component} from 'react';
import {useState, useEffect} from 'react';
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

// style
import theme from '../assets/theme/index';
import {ThemeProvider} from 'styled-components';
import {Icon} from 'native-base';

// redux
import {useSelector, useDispatch} from 'react-redux';
import firebase from '../components/auth/firebase';
import auth from '@react-native-firebase/auth';
import {LoadingScreen} from '../screens/auth/Loading';
import {set} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

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
  const [uid, setUid] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUid(user.uid);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  });

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
