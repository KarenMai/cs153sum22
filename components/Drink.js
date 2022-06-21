import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TextInput, SafeAreaView, StyleSheet } from 'react-native';



const Drink = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const getDrink = async () => {
        try {
          const url = "www.thecocktaildb.com/api/json/v1/1/random.php"
          const response = await fetch(url);
          const json = await response.json();
          setData(json.drink); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getDrink()})

    return(
        <SafeAreaView>
            <Text style={{fontSize:30,margin:10}}>Drink Finder</Text>
            <View style={{flexDirection:'row',margin:10}}>
                <Text>Here is a random drink that I would like to suggest.</Text>  
            </View>
            
            <FlatList
                data={data}
                keyExtractor={({ idDrink }, index) => idDrink}
                renderItem={({ item }) => (
                    <View style={{flexDirection:'row',
                                    padding:15,
                                    margin:5,
                                    borderWidth:2,
                                    justifyContent:'space-evenly',
                                    backgroundColor:'#fedcba',}}>
                        <Text>{item.strDrink}</Text>
        
                        <Image 
                            style={ {  width: 50, height: 50,}}
                            source={{uri:item.strDrinkThumb}} />
                        
                        
                        
                        
                    </View>
                )}
            /> 


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#ecf0f1',
      padding: 8, 
    },
   
  });

export default Drink;
