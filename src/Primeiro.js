// Primeiro.js
import React from "react";
import { Image, StyleSheet, Text, View, TextInput } from "react-native";

function Comp1() {
  return <Text style={style.Texto1}>LOCO</Text>;
}

function Imagem() {
  return <Image source={require('../logo.png')}  style={style.EstiloImg}/>;
}

function Inputa() {
  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.input}
        placeholder="Digte seu Email."
       
      />
    </View>
  );
}
function Inputa2() {
  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.input}
        placeholder="Digte sua senha."

      />
    </View>
  );
}

const style = StyleSheet.create({
  Texto1: {
    color: 'white',
    fontSize: 18
  },
  EstiloImg: {
    height: 100,
    width: 100
  },
  inputContainer: {
    marginTop: 6,
    borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 3,
    backgroundColor: 'yellow'
  },
  input: {
    height: 35,
    width: 200,
    color: 'black'
  }
});

export { Comp1, Imagem, Inputa, style, Inputa2 };
