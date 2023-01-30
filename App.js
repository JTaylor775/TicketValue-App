import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import ConcertImage from './assets/concert.png';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const App = () => {

  const [text, setText] = useState('');
  const [price, setPrice] = useState(0);
  const [textBox, setTextBox] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.header}>Ticket Vault</Text>
      </View>

      <View>
        <TextInput style={styles.input}
          placeholder="Number of Tickets"
          onChangeText={text => setText(text)}
          defaultValue={text} />
      </View>

      <Pressable
        onPress={() => {
          setPrice((text * 99.99));
          setTextBox(true);
        }}>
        {({ pressed }) => (
          <Text style={styles.button}>Find The Cost</Text>
        )}
      </Pressable>
      { textBox ? <Text style={styles.cost}> Ticket Cost: ${price.toFixed(2)} </Text> : 
      <Text style={styles.cost}></Text> }

      <View style={styles.image}>
        <Image source={ConcertImage} style={styles.image} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 175,
    alignCItems: 'center',
    justifyContent: 'center',
    fontSize: 55,
  },
  button: {
    padding: 10,
    alignCItems: 'center',
    justifyContent: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: 'lightcoral',
  },
  div: {
    top: 30,
    Bottom: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 12,
    alignCItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    height: 75,
    borderWidth: 1,
    borderPadding: 20,
    bottom: 35,
  },
  image: {
    bottom: 10,
  },
  cost: {
    height: 200,
    alignCItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    top: 50,
  }
});

export default App;