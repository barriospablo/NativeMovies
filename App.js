import * as React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "./screens/List";
import DetailMovie from "./screens/DetailMovie";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Image
        style={{ height: 300, width: 300 }}
        source={{
          uri:
            "https://www.theblocklearning.com/wp-content/uploads/2018/09/512px-React-icon.svg.png"
        }}
      />
      <Text>Pablinho</Text>

      <TouchableOpacity
        style={{ backgroundColor: "coral", padding: 20, borderRadius: 50 }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>Go to Profile</Text>
      </TouchableOpacity>

      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      /> */}
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pablinho Profile</Text>
      <Image
        style={{ height: 300, width: 300, margin: 20, borderRadius: 50 }}
        source={{
          uri: "https://avatars2.githubusercontent.com/u/49909221?s=460&v=4"
        }}
      />
      <TouchableOpacity
        style={{ backgroundColor: "coral", padding: 20, borderRadius: 50 }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
      {/* <Button
        color="coral"
        title="Go back"
        onPress={() => navigation.navigate("Home")}
      /> */}
    </View>
  );
}

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push("Details")}
//       />
//     </View>
//   );
// }
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen name="Home" component={Home} />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Search">
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

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red"
  }
});
