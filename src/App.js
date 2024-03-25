
import React from 'react';
import { View, StyleSheet, Button, ImageBackground} from 'react-native';
import { Comp1, Imagem, InputLogin, InputSenha, BotaoRegistrar, BotaoEntrar } from './PrimeiraPagina';
import Estilo, {LoginEstilo} from './Estilo';




export default function App() {
  return (
  <ImageBackground source={require('./imagens/background.jpeg')} style={Estilo.backgroundImage}>
    <View>
      <Imagem />
      <View style={Estilo.inputContainer}>
        <InputLogin />
      </View>
      <View>
        <InputSenha />
      </View>

      <View style={Estilo.CaixaBotoes}>
        <BotaoRegistrar />
        <BotaoEntrar/>

      </View>
    </View>
  </ImageBackground>
  );
}

