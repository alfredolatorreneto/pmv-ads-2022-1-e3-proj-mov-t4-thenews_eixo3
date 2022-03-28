import React, { useEffect, useState, useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  StyleSheet
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements';

import app from '../../App.js';

//Recebe a propriedade navigation para clicar e ir para a pagina de EDITAR
export default function MessageCards({ navigation, route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //Metodo que pega todas as mensagens
  const getCardsMessages = async () => {
    try {
      const response = await fetch(
        'https://the-news-back-end.herokuapp.com/messages'
      );
      const jsonObj = await response.json();
      setData(jsonObj);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCardsMessages();
  }, []);

  const LeftContent = (props) => <Avatar.Icon {...props} icon="file" />;

  //Metodo que deleta mensagens
  const simpleAlertHandler = () => {
    alert('Mensagem deletada');
  };
  const deletar = async (id) => {
    const resp = await fetch(`https://the-news-back-end.herokuapp.com/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    simpleAlertHandler();
    getCardsMessages();
  };

  //Metodo que atualiza mensagens ao puxar para baixo.
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getCardsMessages().then(() => setRefreshing(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data}
          keyExtractor={({ messageId }, index) => messageId}
          renderItem={({ item }) => (
            <Card style={{ marginTop: 15 }}>
              {/*<Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  left={LeftContent}
                />*/}
              <Card.Content>
                <Title>{item.titleMessage}</Title>
              </Card.Content>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Text>{item.messageField} </Text>
              <Card.Actions>
                {/*Recebe a propriedades do componente NewsScreen para clicar e enviar o ID e para navegar para pagina de editar e no segundo parametro do medodo, ele envia o ID que esta atualizando para a pagina UPDATE*/}

                <TouchableOpacity style={styles.button}
                  onPress={() =>
                    navigation.navigate('EditMessage', { id: item.id })
                  }>
                  <Icon name="edit" color="#517fa4" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deletar(item.id)} style={styles.button}>
                  <Icon name="delete" color="#517fa4" />
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={() =>
                    navigation.navigate('CommentsScreen', { id: item.id })
                  }>
                  <Icon name="message" color="#517fa4" />
                </TouchableOpacity>

                {/*<Button onPress={() => deletar(item.id)}>Apagar</Button>*/}
              </Card.Actions>
            </Card>
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 16,
    marginRight:10,
    borderRadius: 10,
  },
  })