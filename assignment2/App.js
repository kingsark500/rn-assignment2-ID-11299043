import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [name , setName] = useState("Maxwell");

 
  
  return (
    <View style={styles.container}>
      <Text>My name is </Text>
      <Text style={styles.maxText}> {name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
   
  },
  maxText: {
    fontWeight: 'bold',
  }
});
