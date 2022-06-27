import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import MyStack from './components/MyStack.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <MyStack /> 
  );
}

/**
import Drinks from './components/counter.js';
export default function App() {
  return (
    <Counter /> 
  );
}
 */



