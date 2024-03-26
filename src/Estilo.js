import { Button, StyleSheet, TouchableOpacity , Text} from "react-native";
import styled from 'styled-components/native'

export default StyleSheet.create({

    texto: {

        fontSize: 18,

    },

    App: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    
      },

      Texto1: {
        color: 'white',
        fontSize: 18,
      },
      EstiloImg: {
        width: 200,
        height: 200,
  
     
      },
      inputContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        borderRadius: 2,
        backgroundColor: 'black',
        textAlign: 'center',
       

      },
      input: {
        width: '100%',
        color: 'white',
        textAlign: 'center',
        fontSize: 20, 
      },

      caixa_registro: {

        marginTop: 20

      },

      backgroundImage: {
        flex: 1,
        width: '100%', 
        height: '100%', 
        justifyContent: 'center',
        alignItems: 'center',
      },

      CaixaLogo: {

        justifyContent: 'center', // Centraliza a logotipo horizontalmente
        alignItems: 'center',
    
      }, 

      CaixaBotoes: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', // Adicionando justifyContent: 'space-between'
       
      },


    

});

// estilização place holder
export const LoginEstilo = styled.TextInput`
  height: 50px;
  width: 380px;
  color: white;
  font-size: 10px;
  font-family: 'roboto';
  text-align: center;

`;


// // estilização do botao login

// export const BotaoRegistrarEstilo = styled(TouchableOpacity)`
//   background-color: black; // Escolha a cor que deseja
//   padding: 5px 15px;
//   border-radius: 5px;
//   margin: 10px 0px;
// `;

// export const TextoBotao = styled(Text)`
//   color: white;
//   text-transform: uppercase;
//   text-align: center;
// `;


