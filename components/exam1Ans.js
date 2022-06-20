import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const WButton = ({color,title}) => 
    <View style={{flex:1}}>
        <Button color={color} title={title} />
    </View>
    ;


export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.topButtons}>
        <WButton color="blue" title = 'BLUE BUTTON'/>
        <WButton color="red" title = 'RED BUTTON'/>
        <WButton color="green" title = 'GREEN BUTTON'/>
      </View>

      <Text style={styles.title}>
        Write the code for this screen
      </Text>

     <View style = {styles.bottomButtons}>
        <Button color="blue"  title = 'BLUE BUTTON'/>
        <Button color="red" title = 'RED BUTTON'/>
        <Button color="green" title = 'GREEN BUTTON'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  title: {
    flex:1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topButtons: {
    flexDirection:"row",
    justifyContent:'space-evenly',
  },
  bottomButtons: {
    flexDirection:"column",
    justifyContent: 'space-evenly',
  },
});