
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Comp1, Imagem, Inputa, style, Inputa2 } from './Primeiro';


export default function App() {
  return (
    <View style={styles.App}>
      <Imagem />
      <View style={style.inputContainer}>
        <Inputa />
      </View>
      <View>
        <Inputa2 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({


  App: {


    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'


  },



});