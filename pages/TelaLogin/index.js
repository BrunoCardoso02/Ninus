import React, { useState, useContext } from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import styles from './style';
import AbCampoTexto from '../../components/Inputs';
import AbBotao from '../../components/Botao';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import {AuthContext} from '../../Context/AuthContext'

export default function TelaLogin() {
  const [email, setEmail] = useState('leonardin.plusoft@teste.com');
  const [senha, setSenha] = useState('Leonardoteste123');

    // Contexto
  const {setToken, setId} = useContext(AuthContext)

  const navigation = useNavigation();
  const dados = {
    email: email,
    password: senha
  }

  function SignIn() {
    const url = 'http://192.168.15.19:8080/api/v1/login';
    axios.post(url, dados)
      .then((res) => {
        const token = res.data.token;
        const id = res.data.accountId;
        if (id && token){
           // AsyncStorage.setItem('id', id.toString())
           // AsyncStorage.setItem('token', token.toString())
            navigation.navigate('TelaAulas')
            console.log(res.data.token)
            console.log(id)
            setToken(token)
            setId(id)
        }else{
          console.log('ID e/ou token são nulos ou indefinidos na resposta.')
        }
      })
      .catch((err) => console.log("Deu erro", err))
  }
  function redirecionarCadastro() {
    navigation.navigate('CadastroUsuario')
  }

  return (

    <ImageBackground source={require('../../assets/background.jpg')} style={{ height: "100%" }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textoTitulo}>Olá</Text>
          <Text style={styles.textoSaudacoes}>Seja bem-vindo Ninus!</Text>
        </View>

        <View style={styles.containerPrincipal}>
          <AbCampoTexto placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} />
          <AbCampoTexto placeholder='Senha' value={senha} onChangeText={(text) => setSenha(text)} />
          <AbBotao titulo='Login' onPress={SignIn} />
          <Text style={styles.textoRecuperarSenha}>Esqueci a senha</Text>
          <TouchableOpacity style={styles.textoCriarConta} onPress={redirecionarCadastro}>
            <Text style={styles.textoLink}>Não tem uma conta? Crie aqui</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>

  )
}
