import React from 'react';
import {useState} from 'react';
// import { StatusBar } from "expo-status-bar";
import {StatusBar} from 'react-native';

import {StyleSheet, Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';

// redux

import allReducer from './app/reducers/index.js';
import {createStore} from 'redux';
import {Provider as StoreProvider, useDispatch} from 'react-redux';
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
import Root from './app/navigations/root';

const state = store.getState();

export default function App() {
  return (
    <StoreProvider store={store}>
      {/* <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          hidden={true}
          backgroundColor="transparent"
          translucent={true}
        />
        <NavigationContainer>
          {state.authReducer.isLoggedIn ? <Tabs /> : <AuthStack />}
        </NavigationContainer>
      </ThemeProvider> */}
      <Root></Root>
    </StoreProvider>
  );
}
