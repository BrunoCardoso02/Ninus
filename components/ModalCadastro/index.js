import React, { useEffect, useState, useContext } from "react";
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Modal, Portal, Button, Provider as PaperProvider } from 'react-native-paper';
import api from "../../api/api";
import { AuthContext } from "../../Context/AuthContext";
import { ModalContext } from "../../Context/ModalContext";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style";

export default function ModalCadastro() {
  const [className, setClassName] = useState("");
  const { token, id } = useContext(AuthContext);


  useEffect(() => {
    console.log(token, id)
  }, []);

  function criarAula() {
    const dadosAula = {
      client_id: id,
      class_name: className
    };
    api.post('/class', dadosAula, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
      .then((res) => {
        console.log("Aula criada", res.data.class_name);
        showModal();
      })
      .catch((error) => {
        alert("Erro ao enviar dados para a API: " + error.message);
      });
  }

  return (
    <ScrollView>
      <View style={styles.menu}>
        <Text style={styles.titleMenu}>Crie suas aulas!</Text>

        <Text style={styles.label}>Faça um breve resumo sobre a aula:</Text>
        <TextInput style={styles.input} value={className} onChangeText={(text) => setClassName(text)} />
        <TouchableOpacity style={styles.submitButton} onPress={criarAula}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
