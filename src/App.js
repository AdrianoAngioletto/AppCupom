
import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import { Comp1, Imagem, InputLogin, InputSenha, BotaoRegistrar } from './PrimeiraPagina';
import Estilo, {LoginEstilo} from './Estilo';




export default function App() {
  return (
    <View style={Estilo.App}>
      <Imagem />
      <View style={Estilo.inputContainer}>
        <InputLogin />
      </View>
      <View>
        <InputSenha />
      </View>

      <View>
      <BotaoRegistrar />

      </View>
    </View>
  );
}

