import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SurveyintroScreen} from '../screens/recommendation/SurveyIntro';
import {SurveyquestionScreen} from '../screens/recommendation/SurveyQ';
import {SurveyresultScreen} from '../screens/recommendation/SurveyResult';

//testing ar
import {ArIntroScreen} from '../screens/ar/ArIntro';
import {ArChoice} from '../screens/ar/ArChoice';

const Stack = createStackNavigator();

function RecommendationStacks() {
  return (
    <Stack.Navigator initialRouteName="ArChoice">
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
      <Stack.Screen
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

export default RecommendationStacks;
