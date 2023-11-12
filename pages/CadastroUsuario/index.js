import React, { useState, useContext } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles';
import AbCampoTexto from '../../components/Inputs/index';
import AbBotao from '../../components/Botao';
import Checkbox from 'expo-checkbox';
import api from '../../api/api';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation aqui
import axios from 'axios';
import { signIn } from '../../utils/SignIn';
import { AuthContext } from '../../Context/AuthContext';

export default function CadastroUsuario({SignIn}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [escolaPublica, setEscolaPublica] = useState(false);
    const [escolaParticular, setEscolaParticular] = useState(false);

    const navigation = useNavigation(); 

    const {setToken, setId} = useContext(AuthContext)

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
        name: name,
        email: email,
        password: password,
        school_type: 'CEI_PRIVADO'
    }
    function signUpUsuario() {

        api.post('/client', dadosUsuario, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        .then(() => {
            console.log("Usuario cadastrado");
            signIn(email, password, setToken, setId, navigation)
        })
        .catch((err) => console.log(err.message))
    }
    function redirecionarLogin(){
        navigation.navigate('TelaLogin')
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
                        <AbCampoTexto placeholder='Nome' value={name} onChangeText={(text) => setName(text)} />
                        <AbCampoTexto placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} />
                        <AbCampoTexto placeholder='Senha' criptografar={true} value={password} onChangeText={(text) => setPassword(text)} />
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
                        <AbBotao titulo='Registrar' onPress={signUpUsuario} />
                        <Pressable style={styles.linkToSignIn} onPress={redirecionarLogin} >
                            <Text style={styles.textLinkToSignIn}>Já possui uma conta?</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
