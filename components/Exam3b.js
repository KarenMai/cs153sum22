import React, { useState } from 'react';
import { Button, Image, Text, View, StyleSheet, TextInput } from 'react-native';

const Exam3b = () => {
    const [text,setText] = useState("")
    const [uri,setUri] = useState("https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg")
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Exam3b</Text>
            <View style={{flexDirection:'row'}}>
                <Text>Enter your image URL:</Text>
                <TextInput
                    style={{flex:1,backgroundColor:'yellow'}}
                    placeholder="url of an image"
                    onChangeText = {(text) => {setText(text)}} 
                    defaultValue={uri}
                />
            </View>
            <Button
                title="view image"
                onPress={() => {setUri(text)}} />
            <Image 
                style={ {  width: 250, height: 250,}}
                source={{uri:uri}} />
           

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'column',
      margin:5,
      padding:10,

    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: 'green',
      padding:10,
     
    },
    
  });

  export default Exam3b;