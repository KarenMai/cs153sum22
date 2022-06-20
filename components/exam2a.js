import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const Exam2a = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftCol}>
                <Button title='Button1' color='red' />
                <Button title='Button2' color='red' />
            </View>
            <View style={styles.midCol}>
                <Text style={styles.title}>Exam2a</Text>
                <Text> Write the code for this app.</Text>
                <Text>Including these words!</Text>
                <Text>The colors are red, green, yellow, and blue.</Text>
            </View>
            <View style={styles.rightCol}>
                <Button title='Button3' color='red' />
                <Button title='Button4' color='red' />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'row',

    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: 'green',
      padding:10,
     
    },
    midCol:{
        flex:1,
        textAlign: 'center',
        backgroundColor: 'white',

    },
    leftCol: {
      justifyContent:'space-evenly',
      backgroundColor: 'yellow',
    },
    rightCol: {
      justifyContent: 'flex-end',
      backgroundColor: 'blue',
    },
  });

  export default Exam2a;