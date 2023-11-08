import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, ScrollView, FlatList, Text, Image, ImageBackground } from 'react-native';
import axios from 'axios';
import AulaItem from '../AulaItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api';
import { AuthContext } from '../../Context/AuthContext';
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';
import { ModalContext } from '../../Context/ModalContext';
import { TextInput } from 'react-native-gesture-handler';
import styles from './style';

export default function AulasContainer() {
  const [aulas, setAulas] = useState([]);
  const [temAula, setTemAula] = useState(false);
  const { token, id } = useContext(AuthContext);

  const {visible, setVisible} = useContext(ModalContext)

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: '#F4A460', height: 100, margin: 10, width: "70%", alignItems: "center" };

  useEffect(() => {
    function exibirAula() {
      api.get(`/feed/class/progress/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          const dadosDaAPI = response.data;
          console.log(dadosDaAPI)
          setAulas(dadosDaAPI);
        })
        .catch(error => {
          alert('Erro na requisição GET:' + error);
          console.log("Erro ao fazer o get", error)
        });
    }
    exibirAula()

  }, []);

  //Deletando os dados

  /*const handleDelete = (itemId) => {
    axios.delete(`http://localhost:8080/ninus/api/v1/class/${itemId}`)
        .then(response => {
            alert('Item excluído com sucesso:' + response.data);
        })
        .catch(error => {
            alert('Erro ao excluir o item:' + error);
        });
      }*/

  return (
    <SafeAreaView>
        {temAula ? (
          <FlatList
            data={aulas}
            renderItem={({ item }) => (
              <AulaItem item={item} onDeleteItem={handleDelete} />

            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <>
            <PaperProvider>
              <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                  <Text>Example Modal.  Click outside this area to dismiss.</Text>

                  <Button>Olá mundo</Button>
                  <TextInput style={styles.inputModal}/>
                </Modal>
              </Portal>
              <Button style={{ width: 500, height: 600,alignItems: "center",  }}>
                <Text>Ola</Text>
              </Button>
            </PaperProvider>
          </>
        )}
    </SafeAreaView>
  );
}
