import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/profile/Profile';

const Stack = createStackNavigator();

function ProfileStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
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

export default ProfileStacks;
