import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screen
import Profile from '../screens/profile/Profile';
import ProfileImgChange from '../screens/profile/ProfileImgChange';
import PasswordChange from '../screens/profile/PasswordChange';
import Withdrawal from '../screens/profile/Withdrawal';

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
      <Stack.Screen
        name="ProfileImgChange"
        component={ProfileImgChange}
        options={{
          title: '프로필 사진 변경',
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: '#29582C',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="PasswordChange"
        component={PasswordChange}
        options={{
          title: '비밀번호 재설정',
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: '#29582C',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Withdrawal"
        component={Withdrawal}
        options={{
          title: '회원탈퇴 안내',
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
