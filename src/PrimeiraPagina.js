// Primeiro.js
import React from "react";
import { Image,  Text, View, TextInput, Button, } from "react-native";
import Estilo, { LoginEstilo } from "./Estilo";


function Comp1() {
  return <Text style={Estilo.Texto1}>LOCO</Text>;
}

function Imagem() {

  return (
    <View style={Estilo.CaixaLogo}>
      <Image source={require('./imagens/logotipo.png')} style={Estilo.EstiloImg} />
    </View>
  );

}

function InputLogin() {
  return (
    <View style={Estilo.inputContainer}>
      <LoginEstilo
        placeholder="Digite seu Email."
        placeholderTextColor="white"
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
        placeholderTextColor="white"
        style={{ color: 'white' }} // Defina a cor do texto como branco
        secureTextEntry // Adicione a propriedade secureTextEntry

      />
    </View>
  );
}

function BotaoRegistrar(){

  return(

    <View>
      <Button 
       title="Registrar"
       color="black"
      
      />


    </View>

  )

}

function BotaoEntrar(){

  return (
    <View>
      
    <Button 
    title="Entrar"
    color="black"

      
      
    />

    </View>



  )

}






export { Comp1, Imagem, InputLogin,  InputSenha, BotaoRegistrar, BotaoEntrar };
