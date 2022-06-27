import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, } from 'react-native';
import Pomodoros from './Pomodoros.js';
import PhysicalTherapyRecord from './PhysicalTherapyRecord.js';
import AsyncContextDemo from './AsyncContextDemo.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen 
             name="Profile" 
             component={ProfileScreen} />
        
        <Stack.Screen 
             name="PhysicalTherapy" 
             component={PhysicalTherapy} />

        <Stack.Screen 
             name="PhysicalTherapyRecord" 
             component={PhysicalTherapyRecord} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
      <View style={{ flexDirection: 'row',
                     margin:"25px",
                     border:"thick solid black",
                     padding:'10px',
                     justifyContent: 'space-around', }}>


        <Button
          title="Go to Karen's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Karen', greeting:'Hi!' })
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="Physical Therapy Recorder"
          onPress={() =>
            navigation.navigate('PhysicalTherapyRecord')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="What body part are we working on? "
          onPress={() =>
            navigation.navigate('PhysicalTherapy', { injury: 'ACL' })
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />


    </View>
  );
};

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
const ProfileScreen = ({ navigation, route }) => {
  return <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>;
       // we're using the parameter name passed in from the HomeScreen
};



const PhysicalTherapy = ({ navigation, route }) => {
  return <Text> This is for {route.params.injury} recovery. </Text>;
    <View style={styles.container}>
    <Text>Leg Presses? {count} </Text>
    <Button 
        title="push" 
        onPress = {() => setCount(count+1)}
        />
    <Text>Clam Shells? {count} </Text>
    <Button 
        title="push" 
        onPress = {() => setCount(count+1)}
        /> 
    <Text>Squats? {count} </Text>
    <Button 
        title="push" 
        onPress = {() => setCount(count+1)}
        />
    <Text>Step-Ups? {count} </Text>
    <Button 
        title="push" 
        onPress = {() => setCount(count+1)}
        />  
    <Text>Side Steps" {count} </Text>
    <Button 
        title="push" 
        onPress = {() => setCount(count+1)}
        />
    </View>
}

export default MyStack;