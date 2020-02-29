import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }) {
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
    </View>
  );
}
