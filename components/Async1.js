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

const Async1 = () => {
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
      <Text>
        {" "}
        currentValue = "name":{currentValue.name},"injuriy":
        {currentValue.injuiry},"pain level:"{currentValue.painLevel}{" "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 30, margin: 10 }}>name:</Text>
        <TextInput
          style={{ backgroundColor: "#8AC7DB" }}
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 30, margin: 10 }}>injuiry:</Text>
        <TextInput
          style={{ backgroundColor: "#8AC7DB" }}
          onChangeText={(injuriy) => setInjuriy(injuriy)}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 30, margin: 10 }}>pain Level:</Text>
        <TextInput
          style={{ backgroundColor: "#8AC7DB" }}
          onChangeText={(painLevel) => setPainLevel(painLevel)}
        />
      </View>

      <Button
        title="save profile"
        onPress={() =>
          setCurrentValue({
            name: name,
            injuiry: injuiry,
            painLevel: painLevel,
          })
        }
      />
    </View>
  );
};

export default Async1;
