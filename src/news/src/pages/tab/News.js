import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Avatar,
  StyleSheet
} from 'react-native';
import { FAB } from 'react-native-paper';

import MessageCards from '../../components/MessageCards'

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
            News Screen
          </Text>

        </View>

          {/*Passagem de propriedades para o componente menssageCards*/}
          <MessageCards  navigation = {props.navigation}/>

        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => props.navigation.navigate('PostMessage')}
        />
                <FAB
          style={styles.fabfilter}
          small
          icon="filter"
          onPress={() => props.navigation.navigate('Neighborhood')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'#C68585'
  },
    fabfilter: {
    position: 'absolute',
    margin: 16,
    right: 50,
    bottom: 0,
    backgroundColor:'#C68585'
  },
});
export default NewsScreen;
