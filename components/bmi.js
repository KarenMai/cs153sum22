import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi,setBMI] = useState(0);

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize:40,fontWeight:'bold'}}>
          Body Mass Index Calculator
      </Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter your height in inches"
        onChangeText={newText => 
             setHeight(newText)}
        defaultValue={height}
      />
     <TextInput
        style={{weight: 40}}
        placeholder="Enter your weight in inches"
        onChangeText={newText => 
             setWeight(newText)}
        defaultValue={weight}
      />
      <View style={{flexDirection:'row'}}>
        <Button
            title="calculate BMI"
            onPress = {() => {
                setBMI(weight/(height*height)*703)
            }}
        />
      </View>
      <Text>
        Your height is {height} inches
      </Text>
      <Text>
        Your weight is {weight} pounds
      </Text>
      <Text>
        Your BMI is {bmi}
      </Text>
    </View>
  );
}

export default BMI;