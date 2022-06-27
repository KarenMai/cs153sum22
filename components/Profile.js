/*
  Page to edit your name and email ...
*/
import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueContext';

const Profile = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [name,setName] = useState("anon");
    const [email,setEmail] = useState("anon@anon.com");
    const [secret,setSecret] = useState("...");
    

    return (
        <View>
            <Text> Profile Page for {name}/{email}</Text>
            <View style={{flex:1, flexDirection: 'row'}}>
                <Text> Enter name: </Text>
                <TextInput
                  style={{height: 40, backgroundColor: 'white'}}
                  placeholder="Enter name"
                  onChangeText={newText => setName(newText)}
                  defaultValue={name}
                />
            </View>
           <View style={{flex:1, flexDirection: 'row'}}>
           <Text> Enter email: </Text>
            <TextInput
              style={{height: 40, backgroundColor: 'white'}}
              placeholder="Enter email"
              onChangeText={newText => setEmail(newText)}
              defaultValue={email}
            />
            </View>

            <View style={{flex:1, flexDirection: 'row'}}>
           <Text> Enter secret: </Text>
            <TextInput
              style={{height: 40, backgroundColor: 'white'}}
              placeholder="Enter email"
              onChangeText={newText => setSecret(newText)}
              defaultValue={email}
            />
            </View>

            <Button 
               title="save profile info"
               color="red"
               onPress = {() => {
                setCurrentValue({name,email,secret});
               }}
               />

        
        </View>
    )
}
export default Profile