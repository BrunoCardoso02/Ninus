import { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import styles from "./style";
import api from "../../api/api";
import { AuthContext } from "../../Context/AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import { AulaContext } from "../../Context/AulaContext";


export default function ModalCadastro() {
  const [className, setClassName] = useState("");
  const [showAdcionalInputs, setShowAdcionalInputs] = useState(false);
  const [showInitialInputs, setShowInitialInputs] = useState(true);
  const [idClass, setIdClass] = useState(0)
  const [eixo, setEixo] = useState('CONVIVER');
  const [classRoom, setClassRoom] = useState('Maternal 2');
  const [recursosDidaticos, setRecursosDidaticos] = useState('brinquedos e livros.');
  const [tipoDeEnsino, setTipoDeEnsino] = useState('Ensino Infântil');
  const [objetivoDeAprendizado, setObjetivoDeAprendizado] = useState('CRIANCAS_BEM_PEQUENAS');
  const [temaDaAula, setTemaDaAula] = useState('Convivência entre as crianças');
  const [objetivodaAula, setObjetivoDaAula] = useState('Aula que ensine as crianças a conviverem entre si.');
  const [descricaoDoTema, setDescricaoDoTema] = useState('O eu, o outro e o nós');
  const [duracaoAula, setDuracaoAula] = useState(50);



  const { token, id } = useContext(AuthContext);
  const {idAula, setIdAula} = useContext(AulaContext)


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
        console.log("Aula criada", res.data.class_name, res.data.id);
        setIdClass(res.data.id)
        setShowAdcionalInputs(true)
        setShowInitialInputs(false)
      })
      .catch((error) => {
        alert("Erro ao enviar dados para a API: " + error.message);
      });
  };

  //AULA DETALHADA
  function criarAulaDetalhada() {
    const dadosAulaDetalhada = {
      class_ninus_id: idClass,
      axle: eixo,
      class_room: classRoom,
      didatic_resources: recursosDidaticos,
      type_teaching: tipoDeEnsino,
      learning_objective: objetivoDeAprendizado,
      class_theme: temaDaAula,
      class_objective: objetivodaAula,
      fields_experience: descricaoDoTema,
      duration_in_minutes: duracaoAula

    }
    api.post('/class/input', dadosAulaDetalhada, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log("Aula criada!!!!!!!!!!!!!!");
        console.log(res.data.id)
        setIdAula(res.data.id)

      })
      .catch((err) => console.log(err))
  }

  return (
    <View style={styles.menu}>
      <Text style={styles.titleMenu}>Crie suas aulas!</Text>

      {showInitialInputs && (
        <>
          <Text style={styles.label}>Faça um breve resumo sobre a aula:</Text>
          <TextInput style={styles.input} value={className} onChangeText={(text) => setClassName(text)} />
          <TouchableOpacity style={styles.submitButton} onPress={criarAula}>
            <Text style={styles.submitButtonText}>Enviar</Text>
          </TouchableOpacity>
        </>
      )}

      {showAdcionalInputs && (
        <ScrollView>
          <View style={styles.containerInputs}>
            <Text style={styles.label}>Eixo</Text>
            <TextInput
              style={styles.input}
              value={eixo}
              onChangeText={(text) => setEixo(text)}
            />
            <Text style={styles.label}>Turma</Text>
            <TextInput
              style={styles.input}
              value={classRoom}
              onChangeText={(text) => setClassRoom(text)}
            />
            <Text style={styles.label}>Recursos Didáticos</Text>
            <TextInput
              style={styles.input}
              value={recursosDidaticos}
              onChangeText={(text) => setRecursosDidaticos(text)}
            />
            <Text style={styles.label}>tipo de ensino</Text>
            <TextInput
              style={styles.input}
              value={tipoDeEnsino}
              onChangeText={(text) => setTipoDeEnsino(text)}
            />
            <Text style={styles.label}>Objetivo de Aprendizado</Text>
            <TextInput
              style={styles.input}
              value={objetivoDeAprendizado}
              onChangeText={(text) => setObjetivoDeAprendizado(text)}
            />
            <Text style={styles.label}>Tema da Aula</Text>
            <TextInput
              style={styles.input}
              value={temaDaAula}
              onChangeText={(text) => setTemaDaAula(text)}
            />
            <Text style={styles.label}>Objetivo da Aula</Text>
            <TextInput
              style={styles.input}
              value={objetivodaAula}
              onChangeText={(text) => setObjetivoDaAula(text)}
            />
            <Text style={styles.label}>Descrição do tema</Text>
            <TextInput
              style={styles.input}
              value={descricaoDoTema}
              onChangeText={(text) => setDescricaoDoTema(text)}
            />
            <Text style={styles.label}>Duração da aula</Text>
            <TextInput
              style={styles.input}
              value={duracaoAula.toString()}
              onChangeText={(text) => setDuracaoAula(text)}
            />
            <TouchableOpacity style={styles.submitButton} onPress={criarAulaDetalhada}>
              <Text style={styles.submitButtonText}>Enviar</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      )}
    </View>
  )
}