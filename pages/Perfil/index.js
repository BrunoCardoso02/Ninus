import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function TelaPerfil({ navigation }) {
    const[nome, setNome] = useState("");

    const navegar = () =>{
        navigation.navigate("EditarPerfil")
    }

    const voltarTela = () => {
        navigation.navigate("TelaAulas")
    }
    return(
        <ImageBackground source={require('../../assets/background2.jpg')} style={style.container}>
            <View style={style.conteudo}>
                <TouchableOpacity onPress={voltarTela}>
                    <Ionicons name="chevron-back" color={"white"} style={style.voltar}/>
                </TouchableOpacity>
                <Text style={style.titulo}>Tela de Perfil</Text>
                <Image source={require('../../assets/imagemPerfil.png')} style={style.fotoPerfil}/>
                <TouchableOpacity onPress={navegar}>
                    <Text style={style.nome}>{nome}Marcos</Text>
                </TouchableOpacity>
                <Text style={style.textoSaudacoes}>Olá!</Text>
                <Text style={style.textoSubTitulo}>Bem vindo de volta!</Text>
            </View>
        </ImageBackground>
    )
}