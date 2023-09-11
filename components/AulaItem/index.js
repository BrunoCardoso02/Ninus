import {View, Text, TouchableOpacity, Button} from 'react-native';
import style from './style';


export default function AulaItem({item}){
    return(
        <View style={style.containerGeral}>
            <View style={style.containerAula}>
                <View style={style.containerTitulo}>
                    <Text style={style.tituloAula}>{item.titulo}</Text>
                    <TouchableOpacity style={{bottom: 15}}>
                        <Button title='...'></Button>
                    </TouchableOpacity>
                </View>
                <Text style={style.descricaoAula}>{item.descricao}</Text>
            </View>
        </View>
    )
}