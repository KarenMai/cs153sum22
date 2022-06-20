import React, { useState } from 'react';
import { Text, TextInput, View, Button, } from 'react-native';

const Cylinder = () => {
  const [height, setHeight] = useState('');
  const [radius, setRadius] = useState('');
  const [volume, setVolume] = useState('');

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Enter height of Cylinder"
        onChangeText={newText => setHeight(newText)}
        defaultValue={height}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Enter radius of Cylinder"
        onChangeText={newText => setRadius(newText)}
        defaultValue={radius}
      />
      <Button
        title="calculate Cylinder Volume"
        onPress = {() => {
            setVolume(Math.PI * radius * radius * height)
        }}
      />
      <Text>volume = {volume} </Text>
    </View>
  );
}

export default Cylinder;