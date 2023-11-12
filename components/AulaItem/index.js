import { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, } from 'react-native';
import style from './style';
import api from '../../api/api.js';
import { AulaContext } from '../../Context/AulaContext.js';
import { AuthContext } from '../../Context/AuthContext.js';




export default function AulaItem({ item }) {
    const {idAula} = useContext(AulaContext);
    const {token} = useContext(AuthContext)

    function deletarAula(){
        api.delete(`/business/class/input/${idAula}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => console.log("Aula excluída"))
        .catch((err) => console.log("Ocorreu um erro", err))
    }

    

    return (
        <View style={style.containerGeral}>
            <View style={style.containerAula}>
                <View style={style.containerTitulo}>
                    <Text style={style.tituloAula}>{item.class_name}</Text>
                    <TouchableOpacity onPress={deletarAula}>
                        <Text style={style.buttonText}>X</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.descricaoAula}>{item.introduction}</Text>
                <Text style={style.descricaoAula}>{item.class_categorie}</Text>
            </View>
        </View>
    )
}
