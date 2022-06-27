import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Async1Screen from './Async1';
import Async2Screen from './Async2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Async1" component={Async1Screen} />
        <Tab.Screen name="Async2" component={Async2Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}