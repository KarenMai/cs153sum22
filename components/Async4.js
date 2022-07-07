import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  Constants,
} from "react-native";
import { useValue } from "./ValueStorageContext"; // to use/change shared values

const Async4 = () => {
  const [name, setName] = useState("");
  const [injuiry, setInjuriy] = useState("");
  const [painLevel, setPainLevel] = useState("");
  const { currentValue, setCurrentValue } = useValue();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingr, setIngr] = useState("Seafood");

  const getMeals = async () => {
    try {
      const url =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + ingr;
      const response = await fetch(url);
      const json = await response.json();
      setData(json.meals);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeals();
  }, [ingr]);

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.header}>What to eat after training? </Text>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={styles.paragraph}> Category of Food:</Text>
          <TextInput
            placeholder="ingredient"
            onChangeText={(text) => {
              setIngr(text);
            }}
            defaultValue={ingr}
          />
        </View>

        <FlatList
          data={data}
          keyExtractor={({ idMeal }, index) => idMeal}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                padding: 15,
                margin: 5,
                borderWidth: 2,
                justifyContent: "space-evenly",
                backgroundColor: "#8AC7DB",
              }}
            >
              <Text>{item.strMeal}</Text>

              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: item.strMealThumb }}
              />
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
export default Async4;
