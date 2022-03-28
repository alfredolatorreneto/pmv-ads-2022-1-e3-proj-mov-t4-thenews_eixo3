import React, { useEffect, useState, useForm } from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { TextInput, Alert, Card, Title } from 'react-native-paper';
import { Input, Icon } from 'react-native-elements';

export default function Cadastrar({ route, navigation }) {
  //pega o id dos parametros de rota, exportado no arquivo MESSAGECARD.JS na ação de clicar
  const { id } = route.params;

  const [dados, setData] = useState([]);
  const getCardsMessages = async () => {
    const response = await fetch(
      `https://the-news-back-end.herokuapp.com/messages/${id}`
    );
    const jsonObj = await response.json();
    setData(jsonObj);
  };

  useEffect(() => {
    getCardsMessages();
  }, []);

  //atualiza os campos para ficarem reativos e serem alterados.
  const [text, setText] = useState('');

  //realiza PUT DA MENSAGEM

  const [titleMessage, setTitleMessage] = useState('');
  const [messageField, setMessageField] = useState('');
  const [imgField, setImgField] = useState('');
  
  const simpleAlertHandler = () => {
    alert('Mensagem ATUALIZADA');
  };

  const atualizar = async () => {
    const resp = await fetch(
      `https://the-news-back-end.herokuapp.com/update/${id}`,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titleMessage, messageField, imgField, id }),
      }
    );

    simpleAlertHandler();
    navigation.navigate('NewsScreen');
  };

  //Verifica se retorna dados na API
  if (dados[0]?.id != undefined) {
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {dados.map((dado) => {
          return (
            <View key={dado.id}>
              <TextInput value={'ID: ' + dado.id} />

              <TextInput
                placeholder="Titulo"
                onChangeText={(newText) => setText(newText)}
                defaultValue={dado.titleMessage}
                onChange={(e) => setTitleMessage(e.target.value)}
              />

              <TextInput
                onChangeText={(newText) => setText(newText)}
                defaultValue={dado.messageField}
                onChange={(e) => setMessageField(e.target.value)}
              />

              <Text style={{ margin: 10, padding: 10 }}>
                <Button title="Atualizar Post" onPress={() => atualizar()} />
              </Text>
            </View>
          );
        })}
      </View>
    );
  } else {
    return <Text>CARREGADO...</Text>;
  }
}
