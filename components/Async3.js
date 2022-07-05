import React, { useState, useEffect } from 'react';
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
        </View>
    )
}


export default Async3;











