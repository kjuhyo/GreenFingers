import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DiaryScreen} from '../screens/diary/Diary';
import {DiaryWriteScreen} from '../screens/diary/DiaryWrite';
import {DiaryUpdateScreen} from '../screens/diary/DiaryUpdate';
import DiaryTimeline from '../screens/diary/DiaryTimeline';

const Stack = createStackNavigator();

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
          title: '다이어리 작성',
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
          title: '다이어리 수정',
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: '#29582C',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="DiaryTimeline"
        component={DiaryTimeline}
        options={{
          title: '타임라인',
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

export default DiaryStacks;
