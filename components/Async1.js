import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueContext';

const Async1 = () => {
    const [text,setText] = useState("");
    const {currentValue,setCurrentValue} = useValue();
    return (
        <View>
            <Text> Async1 </Text>
            <Text> username: {currentValue.username} </Text>
            <View style={{flexDirection:'row'}}>
                <Text>Update your username:</Text>
                <TextInput
                    style={{backgroundColor:'yellow'}}
                    onChangeText = {(text)=>setText(text)} 
                />
            </View>
            
            <Button 
               title="save username"
               onPress = {() => setCurrentValue({username:text})}
               />
            
        </View>
    )
}
export default Async1;