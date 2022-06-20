import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Mph2fps = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type your speed in mph"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        Your speed is {text/3600*5280} fps.
      </Text>
    </View>
  );
}

export default Mph2fps;