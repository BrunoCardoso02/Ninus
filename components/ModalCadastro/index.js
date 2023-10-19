import { useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from "./style";
import axios from "axios";

export default function ModalCadastro(){
  const [inputDisciplina, setInputDisciplina] = useState(""); 
  const [inputResumo, setInputResumo] = useState(""); 

    const criarAula = () => {
        const dadosAula = {
          disciplina: inputDisciplina,
          resumo: inputResumo,
        };
    
        const apiUrl = "http://localhost:8080/api/v1/class";
    
        axios.post(apiUrl, dadosAula)
          .then((response) => {
            if (response.data.success) {
              alert("Aula criada com êxito");
            } else {
              alert("Erro ao criar aula. Tente novamente mais tarde.");
            }
          })
          .catch((error) => {
            alert("Erro ao enviar dados para a API: " + error);
          });
      };
    return(
        <View style={styles.menu}>
        <Text style={styles.titleMenu}>Crie suas aulas!</Text>
        <Text style={styles.label}>Qual é sua disciplina?</Text>
        <TextInput style={styles.input} value={inputDisciplina} onChangeText={(text) => setInputDisciplina(text)} />

        <Text style={styles.label}>Faça um breve resumo sobre a aula:</Text>
        <TextInput style={styles.input} value={inputResumo} onChangeText={(text) => setInputResumo(text)} />
          <TouchableOpacity style={styles.submitButton} onPress={criarAula}>
            <Text style={styles.submitButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
    )
}