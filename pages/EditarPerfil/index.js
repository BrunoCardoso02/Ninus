import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const api = axios.create({
    baseURL: ""
})


export default function EditarPerfil({ navigation }) {

    const[nome, setNome] = useState("");
    const[sobrenome, setSobrenome] = useState("");
    const[telefone, setTelefone] = useState("");
    const[email, setEmail] = useState("");

    const voltarTela = () => {
        navigation.navigate("TelaPerfil")
    }

    return(
        <ImageBackground source={require('../../assets/background2.jpg')} style={styles.container}>  
                <View style={{flexDirection: "row", marginTop: 50, alignItems: "center"}}>
                    <TouchableOpacity onPress={voltarTela}>
                         <Ionicons name="chevron-back" color={"white"} style={styles.voltar}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Editar Perfil</Text>
                </View>
                <View>
                    <Image source={require('../../assets/imagemPerfil.png')} style={styles.fotoPerfil}/>

                    <Text style={styles.subTitle}>Suas informações</Text>

                    <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome}/>
                    <TextInput placeholder="Sobrenome" style={styles.input} value={sobrenome} onChangeText={setSobrenome}/>
                    <TextInput placeholder="Telefone" style={styles.input} value={telefone} onChangeText={setTelefone}/>
                    <TextInput placeholder="E-mail" style={styles.input} value={email} onChangeText={setEmail}/>

                    <TouchableOpacity style={styles.btnSalvar}>
                        <Text style={{textAlign: "center", fontWeight: "bold", color: "white", fontSize: 16}}>Salvar</Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
    );
}