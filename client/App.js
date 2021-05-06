import React from 'react';
import {useState, useEffect} from 'react';
// import { StatusBar } from "expo-status-bar";
import {Dimensions, StatusBar, Alert} from 'react-native';

import {StyleSheet, Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';

// style
import theme from './app/assets/theme/index';
import {ThemeProvider} from 'styled-components';
import {Icon} from 'native-base';

//navigation
import Root from './app/navigations/Root';

//redux
import allReducer from './app/reducers/index.js';
import {createStore} from 'redux';
import {Provider as StoreProvider} from 'react-redux';

//firebase
import messaging from '@react-native-firebase/messaging';
// import firebase from '@react-native-firebase/app';
// import firebase from '@react-native-firebase/app';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function App() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const title = JSON.stringify(remoteMessage.notification.title);
      const body = JSON.stringify(remoteMessage.notification.body);
      console.log(remoteMessage);
      Alert.alert(title, body);
    });
    return unsubscribe;
  }, []);

  return (
    <StoreProvider store={store}>
      <Root></Root>
    </StoreProvider>
  );
}

// redux 함수형
//https://lannstark.tistory.com/128
