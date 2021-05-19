import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//testing ar
import {ArIntroScreen} from '../screens/ar/ArIntro';
import {ArChoice} from '../screens/ar/ArChoice';

const Stack = createStackNavigator();

function ArStacks() {
  return (
    <Stack.Navigator initialRouteName="Surveyintro">
      <Stack.Screen
        name="ArChoice"
        component={ArChoice}
        options={{
          title: 'PLANT AR',
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: '#29582C',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="ArIntro"
        component={ArIntroScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}

export default ArStacks;
