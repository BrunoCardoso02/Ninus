import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import style from './style';
import TabBar from '../../components/TabBar';
import api from '../../api/api';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Modal, Portal, Button, PaperProvider, Dialog, Avatar } from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AbCampoTexto from '../../components/Inputs';
import Ionicons from "react-native-vector-icons/Ionicons"


export default function TelaPerfil() {
    const [visible, setVisible] = React.useState(false);
    const [visibleModal, setVisibleModal] = React.useState(false);


    const showDialog = () => setVisible(true)
    const hideDialog = () => setVisible(false);

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    const { id, token } = useContext(AuthContext);
    const [nome, setNome] = useState("");
    const [novoNome, setNovoNome] = useState("")
    const navigation = useNavigation();

    useEffect(() => {
        
        api.get(`/client/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setNome(res.data.name)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function deletarUsuario() {
        api.delete(`client/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
                .then(() => {
                    console.log("Conta Excluida");
                })
                .catch((err) => console.log(err))
        })
    }

    function alterarNickName() {
        api.put(`/client?name=${novoNome}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                setNome(novoNome)
                hideModal()
            })
            .catch((err) => console.log(err))
    }

    return (
        <ImageBackground source={require('../../assets/background2.jpg')} style={style.container}>
            <View style={style.conteudo}>
                <Text style={style.titulo}>Tela de Perfil</Text>
                <Image source={require('../../assets/imagemPerfil.png')} style={style.fotoPerfil} />

                <View style={style.saudacoes}>
                    <Text style={style.textoSaudacoes}>Olá! {nome} </Text>
                    <TouchableOpacity onPress={showModal}>
                        <MaterialIcons name="edit" color="#F4A460" size={25} style={style.iconEdit} />
                    </TouchableOpacity>
                </View>

                <Text style={style.textoSubTitulo}>Bem vindo de volta!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
                <View style={style.containerLogout}>
                    <Text style={style.textoLogout}>Sair</Text>
                    <Ionicons name="exit-outline" color="red" size={25} style={style.iconLogout}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.botaoDeletarConta} onPress={showDialog}>
                    <Text style={style.textoDeletarConta}>Deletar conta</Text>
                </TouchableOpacity>
            </View>
            <Portal >
                <Dialog visible={visibleModal} onDismiss={hideModal} style={style.modalEditar}>
                    <Dialog.Content  >
                        <TextInput
                            style={style.input}
                            placeholder='Novo nickname'
                            value={novoNome}
                            onChangeText={(text) => setNovoNome(text)}
                        />
                        <TouchableOpacity style={style.botaoEditar}>
                            <Text style={style.textoBotaoEditar} onPress={alterarNickName}>Enviar</Text>
                        </TouchableOpacity>
                    </Dialog.Content>
                </Dialog>
            </Portal>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} style={style.modalDeletar}>
                    <Dialog.Actions>
                        <Text style={style.modalTextoDeletar}>Deseja excluir a conta?</Text>
                        <Button onPress={hideDialog}><Text style={style.botaoTextoCancelarDelete}>Cancelar</Text></Button>
                        <Button onPress={() => {
                            deletarUsuario
                            navigation.navigate('TelaLogin')
                        }}><Text style={style.botaoTextoDeletarConta} >Sim</Text></Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <TabBar />
        </ImageBackground>

    )
}
