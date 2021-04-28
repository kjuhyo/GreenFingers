import React from 'react';
import {useState, useEffect} from 'react';
// import { StatusBar } from "expo-status-bar";
import {Dimensions, StatusBar} from 'react-native';

import {StyleSheet, Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';

// style
import theme from './app/assets/theme/index';
import {ThemeProvider} from 'styled-components';
import {Icon} from 'native-base';

import allReducer from './app/reducers/index.js';
import {createStore} from 'redux';
import Root from './app/navigations/Root';
import {Provider as StoreProvider} from 'react-redux';
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function App() {
  useEffect(() => {
    // 렌더링이 얼마나 되는지 확인용
    console.log('rendering!!!!');
  });

  return (
    <StoreProvider store={store}>
      <Root></Root>
    </StoreProvider>
  );
}

// redux 함수형
//https://lannstark.tistory.com/128
