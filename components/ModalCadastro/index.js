import { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from "./style";
import api from "../../api/api";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import { ModalContext } from "../../Context/ModalContext";
import { Modal, Portal, Button, PaperProvider, Text } from 'react-native-paper';

export default function ModalCadastro() {
  const [className, setClassName] = useState("");
  const { token, id } = useContext(AuthContext);
  useEffect(() => {
    console.log(token, id)
  }, [])

  //Modal 
  const { visible, setVisible } = useContext(ModalContext);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'black', padding: 20 };

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

  function criarAulaEspecifica() {
    const dadosEspecificos = {
      class_ninus_id: 1,
      axle: "CONVIVER",
      class_room: "Maternal 2",
      didatic_resources: "brinquedos e livros.",
      type_teaching: "Ensino Infântil",
      learning_objective: "CRIANCAS_BEM_PEQUENAS",
      class_theme: "Convivência entre as crianças",
      class_objective: "Aula que ensine as crianças a conviverem entre si.",
      fields_experience: "O eu, o outro e o nós",
      duration_in_minutes: 50
    }
    api.post('/class/input', dadosEspecificos, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => console.log("Aula Cadastrada com sucesso"))
      .catch((err) => console.log(err))
  }
  return (

    <></>
  )
}