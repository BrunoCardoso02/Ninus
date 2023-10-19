import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import styles from './styles';
import AbCampoTexto from '../../components/Inputs/index';
import AbBotao from '../../components/Botao';
import Checkbox from 'expo-checkbox';
import axios from 'axios';


export default function CadastroUsuario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [escolaPublica, setEscolaPublica] = useState(false);
    const [escolaParticular, setEscolaParticular] = useState(false);

    function alterarValorEscolaPublica() {
        setEscolaParticular(false)
        setEscolaPublica(!escolaPublica)
    }
    function alterarValorParticular() {
        setEscolaPublica(false)
        setEscolaParticular(!escolaParticular)
    }

        const dadosDoUsuario = {
            escolaPublica: escolaPublica ? 'CEI_ESTADUAL' : null, 
            escolaParticular: escolaParticular ? 'CEI_PRIVADO' : null, 
          };
    

    const dadosUsuario = {
        nome: name,
        email: email,
        password: password,
        dadosDoUsuario: dadosDoUsuario
    }

    const signUpUsuario = () => {

        axios.post('http://localhost:8080/api/v1/client', dadosUsuario )
        .then((response) => {
            if (response.data.success) {
              alert("Aula criada com êxito");
              navigation.navigate('TelaAulas');
            } else {
              alert("Erro ao criar aula. Tente novamente mais tarde.");
            }
          })
          .catch((error) => {
            console.error("Erro ao enviar dados para a API: ", error);
          });
    }

    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={{ height: "100%" }}>
            <View style={styles.container}>

                <View style={styles.containerTitulo}>
                    <Text style={styles.textoSaudacoes}>Olá! Seja bem-vindo</Text>
                </View>
                <ScrollView>
                <View>
                    <Text style={styles.textoTitulo}>Registrar</Text>
                    <AbCampoTexto placeholder='Nome' value={name} onValueChange={(text) => setName(text)} />
                    <AbCampoTexto placeholder='Email' value={email} onValueChange={(text) => setEmail(text)}  />
                    <AbCampoTexto placeholder='Senha' value={password} onValueChange={(text) => setPassword(text)}  />
                    <View style={styles.containerFormulario}>
                        <View style={styles.containerCheckbox}>
                            <Checkbox
                                onValueChange={alterarValorEscolaPublica}
                                value={escolaPublica}
                                color={"orange"}
                                 />
                            <Text style={styles.checkBoxOptions}>Escola particular</Text>
                            <Checkbox
                                onValueChange={alterarValorParticular}
                                value={escolaParticular}
                                color={"orange"} />
                            <Text style={styles.checkBoxOptions}>Escola publica</Text>
                        </View>
                    </View>
                    <AbBotao titulo='Registrar' onPress={signUpUsuario}/>   
                </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
