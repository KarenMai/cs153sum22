import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueStorageContext'; // to use/change shared values

const Async1 = () => {
    const [name,setName] = useState("");
    const [injuiry,setInjuriy] = useState("");
    const [painLevel,setPainLevel] = useState("");
    const {currentValue,setCurrentValue} = useValue();
    return ( 
        <View>
            <Text> currentValue = "name":{currentValue.name},"injuriy":{currentValue.injuiry},"pain level:"{currentValue.painLevel} </Text>
            <View style={{flexDirection:'row'}}>
                <Text>name:</Text>
                <TextInput
                    style={{backgroundColor:'green'}}
                    onChangeText = {(name)=>setName(name)} 
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>injuiry:</Text>
                <TextInput
                    style={{backgroundColor:'blue'}}
                    onChangeText = {(injuriy)=>setInjuriy(injuriy)} 
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>pain Level:</Text>
                <TextInput
                    style={{backgroundColor:'red'}}
                    onChangeText = {(painLevel)=>setPainLevel(painLevel)} 
                />
            </View>
            
            <Button 
               title="save profile"
               onPress = {() => 
                    setCurrentValue({name:name, injuiry:injuiry, painLevel:painLevel})
                }
               />
            
        </View>
    )
}
export default Async1;
