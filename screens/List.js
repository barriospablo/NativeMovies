import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight
} from "react-native";
import { searchMovies } from "../service/Service";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState({
    s: "",
    selected: {}
  });

  const search = () => {
    searchMovies(state.s).then(response => {
      setMovies(response.data.Search);
      console.log(movies);
    });
  };

  // const search = () => {
  //   axios(url + '&s=' + state.s).then(({data}) => {
  //     let results = data.Search;
  //     setState(prevState => {
  //       return {...prevState, results: results};
  //     });
  //   });
  // };

  // const openPopup = id => {
  //   axios(url + '&i=' + id).then(({data}) => {
  //     let result = data;
  //     console.log('result');

  //     setState(prevState => {
  //       return {...prevState, selected: result};
  //     });
  //   });
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie DB</Text>
      <TextInput
        placeholder="Enter a Movie"
        style={styles.searchbox}
        onChangeText={text =>
          setState(prevState => {
            return { ...prevState, s: text };
          })
        }
        onSubmitEditing={search}
        // value={state.s}
      />

      <ScrollView style={styles.results}>
        {movies.map(result => (
          <TouchableHighlight key={result.key}>
            <View key={result.imdbID} style={styles.results}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", { itemID: result.imdbID })
                }
              >
                <Image
                  source={{ uri: result.Poster }}
                  style={{
                    width: "100%",
                    height: 300
                  }}
                />
              </TouchableOpacity>
              <Text style={styles.heading}>{result.Title}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}

      {/* <Modal
        animationType="fade"
        transparent={false}
        visible={typeof state.selected.Title != 'undefined'}>
        <View style={styles.popup}>
          <Text style={styles.poptitle}>{state.selected.Title}</Text>
          <Text style={{marginBottom: 20}}>
            Rating: {state.selected.imdbRating}
          </Text>
          <Text>state.selected.Plot</Text>
        </View>
        <TouchableHighlight
          onPress={() => setState(prevState)}></TouchableHighlight>
      </Modal> */}
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
    borderRadius: 8,
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
    borderRadius: 10,
    backgroundColor: "#445565"
  }
});

// export default function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>

//     </View>
//   );
// }
