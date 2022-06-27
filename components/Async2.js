import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {useValue} from './ValueContext';

const Async2 = () => {
    const {currentValue,setCurrentValue} = useValue();
    return (
        <View>
            <Text> Async2 </Text>
            <Text> username: {currentValue.username} </Text>
        </View>
    )
}

export default Async2;