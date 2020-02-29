import * as React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import List from "./screens/List";
import DetailMovie from "./screens/DetailMovie";
import ProfileScreen from "./screens/Profile";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ activeTintColor: "red" }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }}
        >
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen name="Home" component={Home} />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Search"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            )
          }}
        >
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home Movies" component={List} />
              <HomeStack.Screen name="Details" component={DetailMovie} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
