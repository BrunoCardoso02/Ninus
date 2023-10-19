import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, } from 'react-native';
import style from './style';


export default function AulaItem({ item, onDeleteItem }) {

    return (
        <View style={style.containerGeral}>
            <View style={style.containerAula}>
                <View style={style.containerTitulo}>
                    <Text style={style.tituloAula}>{item.class_name}</Text>
                    <TouchableOpacity style={{ bottom: 15 }} onPress={() => onDeleteItem(item.id)}>
                        <Text style={style.buttonText}>X</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.descricaoAula}>{item.class_categorie}</Text>
            </View>
        </View>
    )
}
