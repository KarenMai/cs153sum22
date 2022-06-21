import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, TextInput } from 'react-native';

const math = () => {
    const [text, setText] = useState('');
    const [forPrint, setForPrint] = useState([])
    const url = "http://numbersapi.com/number/{text}"
    const response = await fetch(url);
    const json = await response.json();

    return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type a number to hear a tale about"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

    
      <Text style={{padding: 10, fontSize: 42}}>
        
        const response = await fetch('http://numbersapi.com/number/{text}')
        
      </Text>
    </View>
  );
}

export default math;
