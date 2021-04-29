import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {LoginScreen} from '../screens/auth/Login';
import {SignupScreen} from '../screens/auth/Signup';
import {ResetPwScreen} from '../screens/auth/ResetPw';

const Stack = createStackNavigator();

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
      <Stack.Screen
        name="ResetPassword"
        component={ResetPwScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
