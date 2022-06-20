import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TextInput, SafeAreaView } from 'react-native';



const Exam3c = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [ingr,setIngr] = useState('chicken_breast');

    const getMeals = async () => {
        try {
          const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+ingr
          const response = await fetch(url);
          const json = await response.json();
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [ingr])

    return(
        <SafeAreaView>
            <Text style={{fontSize:30,margin:10}}>Meal Finder</Text>
            <View style={{flexDirection:'row',margin:10}}>
                <Text>Main Ingredient:</Text>
                <TextInput
                placeholder="ingredient"
                onChangeText = {(text) => {setIngr(text)}}
                defaultValue = {ingr}
                />    
            </View>
            
            <FlatList
                data={data}
                keyExtractor={({ idMeal }, index) => idMeal}
                renderItem={({ item }) => (
                    <View style={{flexDirection:'row',
                                    padding:15,
                                    margin:5,
                                    borderWidth:2,
                                    justifyContent:'space-evenly',
                                    backgroundColor:'#fedcba',}}>
                        <Text>{item.strMeal}</Text>
        
                        <Image 
                            style={ {  width: 50, height: 50,}}
                            source={{uri:item.strMealThumb}} />
                        
                    </View>
                )}
            /> 

        </SafeAreaView>
    );
}

export default Exam3c;
