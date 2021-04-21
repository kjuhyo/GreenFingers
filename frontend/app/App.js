// react native
import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screen
import { HomeScreen } from "./screens/main/Home";
import { LoginScreen } from "./screens/auth/Login";
import { SignupScreen } from "./screens/auth/Signup";
import { DiaryScreen } from "./screens/diary/Diary";
import { DiaryWriteScreen } from "./screens/diary/DiaryWrite";
import { RecommendationScreen } from "./screens/recommendation/Recommendation";
import { SurveyintroScreen } from "./screens/recommendation/SurveyIntro";
import { RoomScreen } from "./screens/main/Room";

// theme
import theme from "./assets/theme/index";
import { ThemeProvider } from "styled-components";
import { Icon } from "native-base";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStacks() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => null }}
      />
      <HomeStack.Screen
        name="Room"
        component={RoomScreen}
        options={{ header: () => null }}
      />
    </HomeStack.Navigator>
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
            backgroundColor: "#F9F9F9",
          },
          headerTintColor: "#29582C",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="DiaryWrite"
        component={DiaryWriteScreen}
        options={{
          title: "다이어리 등록",
          headerStyle: {
            backgroundColor: "#F9F9F9",
          },
          headerTintColor: "#29582C",
          headerTitleStyle: { fontWeight: "bold" },
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
      <Tab.Screen name="Recommendation" component={RecommendationScreen} />
    </Tab.Navigator>
  );
}

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: "Signup" }}
      />
      {/* <Stack.Screen
        name="SurveyIntro"
        component={SurveyintroScreen}
        options={{ title: "SurveyIntro" }}
      /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {isLogin !== false ? <Mystack /> : <Tabs />}
      </NavigationContainer>
    </ThemeProvider>
  );
}
