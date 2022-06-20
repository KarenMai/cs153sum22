/*
  This doesn't work, probably because the file is too large
  or the server doesn't want to send it to the app... I'll debug it later.
  
*/
import React, { useState, useEffect } from 'react';
import { Text, FlatList, View } from 'react-native';



const CourseDemo = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const getCourses = async () => {
        try {
            console.log('fetching')
          const response = await fetch('https://www.cs.brandeis.edu/~tim/cs103aSpr22/courses20-21.json');
          const json = await response.json();
          console.dir(json)
          setData(json); 
        } catch (error) {
            console.log('error')
            console.dir(error)
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getCourses()}, [])

    return(
        <View>
            <Text>API Demo</Text>
            <Text>{JSON.stringify(data)}</Text>
            
            <FlatList
                data={data.slice(0,2)}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text>{JSON.stringify(item)}</Text>
                )}
            />

        </View>
    );
}

export default CourseDemo;
