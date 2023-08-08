import React from 'react';
import {Text, View, ImageBackground, ScrollView} from 'react-native';
import styles from './style';
import AbCampoTexto from '../Inputs';
import AbBotao from '../Botao';


export default function TelaLogin() {
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={{height: "100%"}}>
        <ScrollView>
          <View style={styles.container}>
              <Text style={styles.textoTitulo}>Olá</Text>
              <Text style={styles.textoSaudacoes}>Seja bem-vindo Ninus!</Text>
          </View>

          <View style={styles.containerPrincipal}>
              <AbCampoTexto placeholder='Email'/>
              
              <AbCampoTexto placeholder='Senha'/>
              <AbBotao titulo='Login'/>
              <Text style={styles.textoRecuperarSenha}>Esqueci a senha</Text>
              <Text style={styles.textoCriarConta}>Não tem uma conta?
                  <Text style={styles.textoLink}>Crie aqui</Text>
              </Text>
          </View>
        </ScrollView>
    </ImageBackground>
  )
}
