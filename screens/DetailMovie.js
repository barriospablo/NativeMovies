import * as React from "react";
import { useState, useEffect } from "react";

import {
  Button,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import { searchOne, searchMovies } from "../service/Service";

export default function Detail({ navigation, route }) {
  const { itemID } = route.params;
  const [detail, setDetail] = useState({});
  useEffect(() => {
    searchOne(itemID).then(response => {
      setDetail(response.data);
    });
    console.log(itemID);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#445565"
      }}
    >
      <ScrollView style={styles.results}>
        <View style={{ backgroundColor: "#223343" }}>
          <Image
            source={{ uri: detail.Poster }}
            style={{
              width: "100%",
              height: 450,
              marginTop: 0
            }}
          />
          <Text style={styles.heading}>{detail.Title}</Text>
          <Text style={styles.heading}>{detail.Year}</Text>
          <Text style={styles.heading}>{detail.Runtime}</Text>
          <Text style={styles.heading}>{detail.Genre}</Text>
          <Text style={styles.heading}>{detail.Director}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223343",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginTop: -40,
    marginBottom: 20
  },
  searchbox: {
    fontSize: 20,
    fontWeight: "300",
    padding: 30,
    width: "100%",
    backgroundColor: "#fff",
    // borderRadius: 8,
    marginBottom: 40
  },
  results: {
    flex: 1,
    width: "100%",
    marginBottom: 20
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    padding: 20,
    // borderRadius: 10,
    backgroundColor: "#445565"
  }
});
