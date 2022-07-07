import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useValue } from "./ValueStorageContext";

const Async2 = () => {
  const { currentValue } = useValue();
  const [dateTime, setDateTime] = useState("");
  const [note, setNote] = useState("");
  const [journal, setJournal] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // the '@profile_info' can be any string
      const jsonValue = await AsyncStorage.getItem("@journal");
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setJournal(data);
        console.log("just set Info, Name and Email");
      } else {
        console.log("just read a null value from Storage");
        // this happens the first time the app is loaded
        // as there is nothing in storage...
        setJournal([]);
        setNote("");
        setDateTime("");
      }
    } catch (e) {
      console.log("error in getData ");
      // this shouldn't happen, but its good practice
      // to check for errors!
      console.dir(e);
      // error reading value
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@journal", jsonValue);
      console.log("just stored " + jsonValue);
    } catch (e) {
      console.log("error in storeData ");
      console.dir(e);
      // saving error
    }
  };

  const clearAll = async () => {
    try {
      console.log("in clearData");
      await AsyncStorage.clear();
    } catch (e) {
      console.log("error in clearData ");
      console.dir(e);
      // clear error
    }
  };

  // Each Pomorodo in the FlatList will be rendered as follows:
  const renderJournal = ({ item }) => {
    return (
      <View style={styles.journal}>
        <Text>{item.dateTime}</Text>
        <Text>{item.note} </Text>
      </View>
    );
  };

  // We can set debug to true if we want to see all of the state variables
  let debug = false;
  const debugView = (
    <View>
      <Text style={styles.headerText}>DEBUGGING INFO</Text>
      <Text>dateTime is ({dateTime})</Text>
      <Text>note is ({note})</Text>
      <Text>journal is {JSON.stringify(journal)}</Text>
    </View>
  );

  return (
    <View>
      <Text> Injuiry </Text>
      <div>
        <Text> your injuiry is {currentValue.injuiry} </Text>
      </div>

      <View style={styles.container}>
        <Text style={styles.headerText}>Journal</Text>
        <Text style={{ fontSize: 12 }}>
          Enter the info for your current jorunal below about your injuriy
        </Text>

        <View
          style={{
            flexDirection: "row",
            margin: 20,
            justifyContent: "space-around",
          }}
        >
          <TextInput // for the date/time
            style={{ fontSize: 10 }}
            placeholder="Date/Time"
            onChangeText={(text) => {
              setDateTime(text);
            }}
            value={dateTime}
          />

          <TextInput // for the goal
            style={{ fontSize: 12 }}
            placeholder="note"
            onChangeText={(text) => {
              setNote(text);
            }}
            value={note}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            title={"Record"}
            color="blue"
            onPress={() => {
              const newJournal = journal.concat({
                dateTime: dateTime,
                note: note,
              });
              setJournal(newJournal);
              storeData(newJournal);
              setDateTime("");
              setNote("");
            }}
          />
          <Button
            title={"Clear"}
            color="red"
            onPress={() => {
              clearAll();
              setJournal([]);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "lightgray",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "green",
              backgroundColor: "lightgray",
            }}
          >
            History of Notes
          </Text>
        </View>

        <FlatList
          data={journal.reverse()}
          renderItem={renderJournal}
          keyExtractor={(item) => item.dateTime}
        />

        {debug ? debugView : <Text></Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#eee",
    justifyContent: "center",
    textAlign: "left",
    marginTop: 20,
    padding: 20,
  },
  pomodoro: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    textAlign: "center",
    backgroundColor: "#aaa",
    fontSize: 32,
    padding: 10,
    color: "blue",
  },
});

export default Async2;
