import React, { useState, useContext } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable } from 'react-native';
import styles from './styles';
import AbCampoTexto from '../../components/Inputs/index';
import AbBotao from '../../components/Botao';
import Checkbox from 'expo-checkbox';
import api from '../../api/api';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';

export default function CadastroUsuario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [escolaPublica, setEscolaPublica] = useState(false);
    const [escolaParticular, setEscolaParticular] = useState(false);

    const navigation = useNavigation();
    const { setToken, setId } = useContext(AuthContext);

    function alterarValorEscolaPublica() {
        setEscolaParticular(false);
        setEscolaPublica(!escolaPublica);
    }

    function alterarValorParticular() {
        setEscolaPublica(false);
        setEscolaParticular(!escolaParticular);
    }

    const dadosUsuario = {
        name: name,
        email: email,
        password: password,
        school_type: escolaParticular ? 'CEI_PRIVADO' : (escolaPublica ? 'CEI_ESTADUAL' : null)
    };

    function signUpUsuario() {
        api.post('/client', dadosUsuario, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        .then(() => {
            console.log("Usuário cadastrado");
            // Chame sua função de login aqui, usando axios ou outra forma que você preferir
            // signIn(email, password, setToken, setId, navigation);
        })
        .catch((err) => console.log(err.message))
    }

    function redirecionarLogin() {
        navigation.navigate('TelaLogin');
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
                                <Text style={styles.checkBoxOptions}>Escola pública</Text>
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
