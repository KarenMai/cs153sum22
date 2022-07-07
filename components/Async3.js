import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  FlatList,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Button,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useValue } from "./ValueStorageContext";

const DATA = [
  {
    id: "1",
    title: "Quadriceps",
  },
  {
    id: "2",
    title: "Hamstrings",
  },
  {
    id: "3",
    title: "Calves",
  },
  {
    id: "4",
    title: "Glutes",
    quantity: "2x15",
  },
  {
    id: "5",
    title: "Popliteus",
  },
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const Async3 = () => {
  const { currentValue } = useValue();
  const renderItem = ({ item }) => <Item title={item.title} />;
  const [prone, setProne] = useState(0);
  const [runner, setRunner] = useState(0);
  const [heel, setHeel] = useState(0);
  const [hip, setHip] = useState(0);
  const [leg, setLeg] = useState(0);
  const [clam, setClam] = useState(0);

  return (
    <View>
      <Text> Pain Level before/after workout </Text>
      <div>
        <Text> pain level currently: {currentValue.painLevel} </Text>
      </div>

      <Text style={{ fontSize: 30, margin: 10 }}>
        Here are the parts of the leg that we will be working on:{" "}
      </Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>

      <Text style={{ fontSize: 30, margin: 10 }}>
        {" "}
        These are the amount of reps done{" "}
      </Text>

      <Text>Prone Knee Extension Hang: {prone} </Text>
      <Text>2 minute</Text>
      <Button title="add" color="green" onPress={() => setProne(prone + 1)} />
      <Button title="refresh" color="red" onPress={() => setProne(0)} />
      <Text>Runner Step Up/Down: {runner} </Text>
      <Text>3x15</Text>
      <Button title="add" color="green" onPress={() => setRunner(runner + 1)} />
      <Button title="refresh" color="red" onPress={() => setRunner(0)} />
      <Text>Standing Heel Raise: {heel} </Text>
      <Text>2x15</Text>
      <Button title="add" color="green" onPress={() => setHeel(heel + 1)} />
      <Button title="refresh" color="red" onPress={() => setHeel(0)} />
      <Text>Sidelying Hip Adbuction: {hip} </Text>
      <Text>3x30sec</Text>
      <Button title="add" color="green" onPress={() => setHip(hip + 1)} />
      <Button title="refresh" color="red" onPress={() => setHip(0)} />
      <Text>Single Leg Stance: {leg} </Text>
      <Text>3x30sec</Text>
      <Button title="add" color="green" onPress={() => setLeg(leg + 1)} />
      <Button title="refresh" color="red" onPress={() => setLeg(0)} />
      <Text>Clamshell at Wall in Hip Extension: {clam} </Text>
      <Text>2x15</Text>
      <Button title="add" color="green" onPress={() => setClam(clam + 1)} />
      <Button title="refresh" color="red" onPress={() => setClam(0)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Async3;
