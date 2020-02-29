import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#223344"
      }}
    >
      <Text style={styles.title}>Home Screen</Text>
      <Image
        style={{ height: 300, width: 300 }}
        source={{
          uri:
            "https://www.theblocklearning.com/wp-content/uploads/2018/09/512px-React-icon.svg.png"
        }}
      />
      <Text style={styles.title}>Pablinho</Text>

      {/* <TouchableOpacity
        style={{ backgroundColor: "coral", padding: 20, borderRadius: 50 }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>Go to Profile</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff"
  }
});
