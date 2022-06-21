import React, { useState, useEffect } from 'react';
import { Text, Button, FlatList, View, Image, Linking } from 'react-native';



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
            <Text>API Demo: What drink should I have today? </Text>
            <FlatList
                data={data}
                keyExtractor={({ idDrink }, index) => idDrink}
                renderItem={({ item }) => (
                    <View style={{flexDirection:'row',
                                    padding:15,
                                    margin:5,
                                    borderWidth:2,
                                    justifyContent:'space-evenly',
                                    backgroundColor:'#add8e6',}}>
                        <Text>{item.strDrink}</Text>        
                        <Image 
                            style={ {  width: 40, height: 40,}}
                            source={{uri:item.strDrinkThumb}} />
                        <Text>{item.strInstructions}</Text>
                        <Button color = "blue" title="Want to learn more about where drink came from?" onPress={() => Linking.openURL('https://www.thecocktaildb.com/')}/>

                    </View>
                )}
            /> 
            <Text>{JSON.stringify(data,null,5)}</Text>

            
        </View>
    );
}

export default Drinks;
