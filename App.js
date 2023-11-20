import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/lereacteur-apollo/image/upload/v1684153265/apollo/lereacteur/React%20Native/logo-imdb_tj4n8g.png",
          }}
          style={styles.logo}
        />
      </View>
      <View>
        <Text style={styles.movieText}>Interstellar </Text>
        <Text style={styles.descMovie}>
          2014 PG-13 2h49min Adventure, Drama, Science-Fiction
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "black",

    box1: {
      backgroundColor: "grey",
      height: 50,
      width: "100%",
    },

    logo: {
      width: 150,
      height: 30,
      resizeMode: "contain",
    },
    movieText: {
      fontSize: 20,
      color: white,
    },
    descMovie: {
      fontSize: 10,
      color: white,
    },
  },
});
