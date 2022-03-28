import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Avatar,
  StyleSheet,
  Button,
} from 'react-native';

import Input from '../../components/Input';
import MessageCards from '../../components/MessageCards';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

//passo o props, para o componente de MESSAGECARDS, que recebe o navigation. LA NO MESSAGECARDS EU CHAMO A PROPRIEDADE EM COLCHETES NAVIGATION E ROUTE
const NewsScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 1 }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 1,
            }}>
            Pagina Comentários
          </Text>
        </View>
        <Text>Isso é um comentário</Text>
        <Text>Isso é um comentário</Text>
        <Text>Isso é um comentário</Text>
        <Text>Isso é um comentário</Text>
        <Text>Isso é um comentário</Text>
        <Text>Isso é um comentário</Text>
        <Text>Isso é um comentário</Text>
        <Input />
        <Button title="Add Comment"> </Button>
      </View>
    </SafeAreaView>
  );
};

export default NewsScreen;
