import React from 'react';
import {useState} from 'react';
// import { StatusBar } from "expo-status-bar";
import {StatusBar} from 'react-native';

import {StyleSheet, Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';

// react navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screen
import {HomeScreen} from '../screens/main/Home';
import {RoomScreen} from '../screens/main/Room';
import {PlantDetail} from '../screens/main/PlantDetail';

import {LoginScreen} from '../screens/auth/Login';
import {SignupScreen} from '../screens/auth/Signup';

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

import {Provider as StoreProvider, useDispatch} from 'react-redux';

import {connect} from 'react-redux';
import authReducer from '../reducers/authReducer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const RecommendationStack = createStackNavigator();

function HomeStacks() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <HomeStack.Screen
        name="Room"
        component={RoomScreen}
        options={{header: () => null}}
      />
      <HomeStack.Screen
        name="PlantDetail"
        component={PlantDetail}
        options={{header: () => null}}
      />
    </HomeStack.Navigator>
  );
}

function RecommendationStacks() {
  return (
    <Stack.Navigator initialRouteName="Surveyintro">
      <RecommendationStack.Screen
        name="Surveyintro"
        component={SurveyintroScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Surveyquestion"
        component={SurveyquestionScreen}
        options={{title: '맞춤 식물 찾기'}}
      />
      <Stack.Screen
        name="Surveyresult"
        component={SurveyresultScreen}
        options={{title: '맞춤 식물 찾기'}}
      />
    </Stack.Navigator>
  );
}
function DiaryStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Diary"
        component={DiaryScreen}
        options={{
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: '#29582C',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="DiaryWrite"
        component={DiaryWriteScreen}
        options={{
          title: '피드 작성',
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: '#29582C',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="DiaryUpdate"
        component={DiaryUpdateScreen}
        options={{
          title: '피드 수정',
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: '#29582C',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStacks} />
      <Tab.Screen name="Diary" component={DiaryStacks} />
      <Tab.Screen name="Recommendation" component={RecommendationStacks} />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}

// export function Root(state) {
const Root = props => {
  // const [isLogin, setIsLogin] = useState(true);
  // console.log(store.dispatch());
  console.log(props);
  // console.log(store.state);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        {props.isLoggedIn ? <Tabs /> : <AuthStack />}
        {/* { !== true ? <AuthStack /> : <Tabs />} */}
      </NavigationContainer>
    </ThemeProvider>
  );
};

// const mapStateToProps = state => ({
//   return {isLoggedIn: state.authReducer.isLoggedIn}
// });

const mapStateToProps = (state, props) => {
  return {authReducer: state.authReducer};
};
export default connect(mapStateToProps)(Root);
