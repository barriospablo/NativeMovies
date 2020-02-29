import * as React from "react";
import { Button, View, Text, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
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
    </View>
  );
}
