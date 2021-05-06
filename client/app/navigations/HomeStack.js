import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../screens/main/Home';
import {RoomScreen} from '../screens/main/Room';
import {PlantDetail} from '../screens/main/PlantDetail';
import {DeleteRoomModal} from '../components/main/DeleteRoomModal';

const HomeStack = createStackNavigator();

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
      <HomeStack.Screen
        name="DeleteRoomModal"
        component={DeleteRoomModal}
        options={{header: () => null}}
      />
    </HomeStack.Navigator>
  );
}
export default HomeStacks;
