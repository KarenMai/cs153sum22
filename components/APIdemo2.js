import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

APIdemo2 = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCOI = async () => {
     try {
      console.log(process.env.CHARITY_API_KEY)
      const state = req.body.state;
      const url= 'https://api.data.charitynavigator.org/v2/Organizations?app_id=d5c6fc87&app_key=' + process.env.CHARITY_API_KEY + '&state=' + state
      const response = await axios.get(url)
      console.dir(response.data)
      res.locals.state = state
      res.locals.charities = response.data || []
      res.render('showCharities')
      setData(response)
    }
    catch { 
      return {Error: err.stack}
    }
  }

  useEffect(() => {
    getCOI();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.geoid}, {item.c5_COI_nat}</Text>
          )}
        />
      )}
    </View>
  );
};

export default APIdemo2;
