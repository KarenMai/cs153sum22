import * as React from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import Constants from "expo-constants";

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

const bio = () => {
  <View style={styles.container}>
    <Text style={styles.header}> ABOUT THE DEVELOPER</Text>
    <Text style={styles.title}>Karen Mai</Text>
    <Text style={styles.subtitle}>
      Sophomore: CS and Applied Math w/ interest in Data Science (ML)
    </Text>
    <Text style={styles.paragraph}>
      Tools Used: Java, Python, SQL, MongoDB, Heroku, R, MatLab, JS, AWS,
      Tableau, and much more
    </Text>
    <Button
      title="Linkedin"
      onPress={() =>
        Alert.alert("Please visit https://www.linkedin.com/in/maikaren/")
      }
    />
    <Button
      title="GitHub"
      onPress={() => Alert.alert("Please visit https://github.com/KarenMai")}
    />

    <View style={{ flex: 1, backgroundColor: "steelblue" }} />
    <View style={{ flex: 2, backgroundColor: "black" }} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  subtitle: {
    margin: 4,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph: {
    margin: 2,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "steelblue",
  },
});

export default bio;
