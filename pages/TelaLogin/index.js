import React, { useState, useContext } from 'react';
import { Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
import AbCampoTexto from '../../components/Inputs';
import AbBotao from '../../components/Botao';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import { signIn } from '../../utils/SignIn';

export default function TelaLogin() {
  const [email, setEmail] = useState("brunotestandoap@plusoft.com");
  const [senha, setSenha] = useState("Testandoapp12");

  const { setToken, setId } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleSignIn = () => {
    signIn(email, senha, setToken, setId, navigation);
  };

  function redirecionarCadastro() {
    navigation.navigate('CadastroUsuario');
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
          <AbCampoTexto placeholder='Senha' value={senha} criptografar={true} onChangeText={(text) => setSenha(text)} />
          <AbBotao titulo='Login' onPress={handleSignIn} />
          <TouchableOpacity style={styles.textoCriarConta} onPress={redirecionarCadastro}>
            <Text style={styles.textoLink}>Não tem uma conta? Crie aqui</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
