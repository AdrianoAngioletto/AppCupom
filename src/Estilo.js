import { StyleSheet } from "react-native";
import styled from 'styled-components/native'

export default StyleSheet.create({

    texto: {

        fontSize: 18

    },

    App: {


        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    
    
      },

      Texto1: {
        color: 'white',
        fontSize: 18
      },
      EstiloImg: {
        height: 200,
        width: 130,
        marginBottom: 50
      },
      inputContainer: {
        marginTop: 6,
        borderRadius: 3,
        backgroundColor: 'white',
        textAlign: 'center'
       

      },
      input: {
        height: 35,
        width: 250,
        color: 'black',
        textAlign: 'center',
        borderBottomWidth: 1,
    
        
      },

      caixa_registro: {

        marginTop: 20

      }

    

});

// estilização place holder
export const LoginEstilo = styled.TextInput`
  height: 35px;
  width: 250px;
  color: black;
  font-family: 'roboto';
  text-align: center;

`;


// estilização do botao login

export let BotaoRegistrarEstilo = styled.Button`
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;

`;

