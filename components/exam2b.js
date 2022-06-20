import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Exam2a from './exam2a';

const Exam2b = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [d, setD] = useState(0);


  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>
         Distance of (x,y,z) from (0,0,0)
      </Text>
      <Text>
        Write the code for this app which calculates
      </Text><Text>
        d = Math.sqrt(x*x+y*y+z*z)
      </Text>
      <TextInput
        placeholder="Enter x"
        onChangeText={newText => 
             setX(newText)}
        defaultValue={x}
      />
     <TextInput
        placeholder="Enter y"
        onChangeText={newText => 
             setY(newText)}
        defaultValue={y}
      />
      <TextInput
        placeholder="Enter z"
        onChangeText={newText => 
             setZ(newText)}
        defaultValue={z}
      />
      <View style={{flexDirection:'row'}}>
        <Button
            title="calculate distance"
            onPress = {() => {
                setD(Math.sqrt(x*x+y*y+z*z))
            }}
        />
      </View>
      <Text>
        distance to ({x},{y},{z}) is d =  {d} 
      </Text>
    </View>
  );
}

export default Exam2b;