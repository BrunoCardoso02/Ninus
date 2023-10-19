import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';
import style from './style';


export default function TelaPerfil(){

    return(
        <ImageBackground source={require('../../assets/background2.jpg')} style={style.container}>
            <View style={style.conteudo}>
                <Text style={style.titulo}>Tela de Perfil</Text>
                <Image source={require('../../assets/imagemPerfil.png')} style={style.fotoPerfil}/>
                <Text style={style.textoSaudacoes}>Olá!</Text>
                <Text style={style.textoSubTitulo}>Bem vindo de volta!</Text>
            </View>
        </ImageBackground>
    )
}