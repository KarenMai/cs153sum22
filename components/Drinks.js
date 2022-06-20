import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image } from 'react-native';



const Drinks = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const getDrinks = async () => {
        try {
          const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
          const response = await fetch(url);
          const json = await response.json();
          setData(json.drinks); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getDrinks()}, [])

    return(
        <View>
            <Text>API Demo</Text>
            <Text>{JSON.stringify(data,null,5)}</Text>

        </View>
    );
}

export default Drinks;
