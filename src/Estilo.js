import { Button, StyleSheet, TouchableOpacity , Text} from "react-native";
import styled from 'styled-components/native'

export default StyleSheet.create({

    texto: {

        fontSize: 18

    },

    App: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    
    
      },

      Texto1: {
        color: 'white',
        fontSize: 18
      },
      EstiloImg: {
        width: 200,
        height: 200,
        marginLeft: 20
     
      },
      inputContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        borderRadius: 2,
        backgroundColor: 'black',
        textAlign: 'center'
       

      },
      input: {
        width: '100%',
        color: 'black',
        textAlign: 'center',
        borderBottomWidth: 1,
        fontSize: 3
    
        
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

        width: '100%',


      }, 

      CaixaBotoes: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', // Adicionando justifyContent: 'space-between'
       
      },


    

});

// estilização place holder
export const LoginEstilo = styled.TextInput`
  height: 35px;
  width: 250px;
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


