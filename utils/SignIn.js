
import axios from 'axios';
import api from '../api/api';

export const signIn = async (email, senha, setToken, setId, navigation) => {
  const dados = {
    email: email,
    password: senha
  };

  try {
    const res = await api.post('/login', dados, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
    const token = res.data.token;
    const id = res.data.accountId;

    if (id && token) {
      navigation.navigate('TelaAulas');
      console.log(res.data.token);
      console.log(id);
      setToken(token);
      setId(id);
    } else {
      console.log('ID e/ou token são nulos ou indefinidos na resposta.');
    }
  } catch (err) {
    console.log('Deu erro', err);
  }
};
