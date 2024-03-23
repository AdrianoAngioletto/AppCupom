// Primeiro.js
import React from "react";
import { Image,  Text, View, TextInput, Button } from "react-native";
import Estilo, { LoginEstilo } from "./Estilo";


function Comp1() {
  return <Text style={Estilo.Texto1}>LOCO</Text>;
}

function Imagem() {
  return <Image source={require('../logo.png')}  style={Estilo.EstiloImg}/>;
}

function InputLogin() {
  return (
    <View style={Estilo.inputContainer}>
      <LoginEstilo
        placeholder="Digite seu Email."
        placeholderTextColor="black"
      />
    </View>
  );
}

function InputSenha() {
  return (
    <View style={Estilo.inputContainer}>
      <LoginEstilo
        style={Estilo.input}
        placeholder="Digte sua senha."
        placeholderTextColor="black"
        secureTextEntry

      />
    </View>
  );
}

function BotaoRegistrar(){

  return(

    <View style={Estilo.caixa_registro}>
      <Button 
       title="Registrar"
      
      />


    </View>

  )


}



export { Comp1, Imagem, InputLogin,  InputSenha, BotaoRegistrar };
