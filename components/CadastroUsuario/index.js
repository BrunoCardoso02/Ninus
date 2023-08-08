import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import styles from './styles';
import AbCampoTexto from '../Inputs';
import AbBotao from '../Botao';
import Checkbox from 'expo-checkbox';


export default function CadastroUsuario() {
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

    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={{ height: "100%" }}>
            <View style={styles.container}>

                <View style={styles.containerTitulo}>
                    <Text style={styles.textoSaudacoes}>Olá! Seja bem-vindo</Text>
                </View>
                <ScrollView>
                <View>
                    <Text style={styles.textoTitulo}>Registrar</Text>
                    <AbCampoTexto placeholder='Nome' />
                    <AbCampoTexto placeholder='Email' />
                    <AbCampoTexto placeholder='Senha' />
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
                    <AbBotao titulo='Registrar'/>   
                </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
