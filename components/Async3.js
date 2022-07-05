import React, { useState, useEffect, useRef} from 'react';
import { Text, FlatList, View, Image, TextInput, SafeAreaView, Button } from 'react-native';
import {useValue} from './ValueStorageContext';



const DATA = [
    {
      id: '1',
      title: 'Calve Raises',
    },
    {
      id: '2',
      title: 'SLR',
    },
    {
      id: '3',
      title: 'Crunches',

    },
    {
        id: '4',
        title: 'Push-Ups',

      },
    {
        id: '5',
        title: 'Pull-Ups',

      },
  ];

const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );


const Async3 = () => {
    const {currentValue} = useValue();
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    const [count,setCount] = useState(0); 
      
    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  // use state be an object with five proproties so that i can update each one
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('30:00:00');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    return (
        <View> 
            <Text> Pain Level before/after workout </Text>
        <div> 
        <Text> pain level currently: {currentValue.painLevel} </Text>  
        </div> 

        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />

        <Text> Your workout countdown starts NOW: </Text>  
        <div className="App">
            <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button>
        </div>

        <Text> These are the amount of reps done </Text>  

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
    )
}


export default Async3;











