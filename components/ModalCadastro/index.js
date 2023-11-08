import { useEffect, useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from "./style";
import api from "../../api/api";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";


export default function ModalCadastro(){
  const [inputResumo, setInputResumo] = useState(""); 
  const {token, id} = useContext(AuthContext);
  useEffect(() => {
    console.log(token, id)
  }, [])

    function criarAula() {
        const dadosAula = {
          client_id: id,
          class_name: inputResumo
        };   
        api.post('/class', dadosAula, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
          .then((res) => {
            console.log("Aula criada", res.data.class_name)
          })
          .catch((error) => {
            alert("Erro ao enviar dados para a API: " + error.message);
          });
      };
    return(
        <View style={styles.menu}>
        <Text style={styles.titleMenu}>Crie suas aulas!</Text>
        <Text style={styles.label}>Faça um breve resumo sobre a aula:</Text>
        <TextInput style={styles.input} value={inputResumo} onChangeText={(text) => setInputResumo(text)} />
          <TouchableOpacity style={styles.submitButton} onPress={criarAula}>
            <Text style={styles.submitButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
    )
}