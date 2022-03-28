import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';

import { Icon } from 'react-native-elements';

const NewsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <View style={{ flex: 1, padding: 16 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={styles.container}>
              <Icon style={styles.icon} name="search" color="#517fa4" />
              <TextInput placeholder="Neighborhood Search " style={styles.input} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('News')}>
              <Text style={{ fontSize: 20 }}>PADARIAS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('News')}>
              <Text style={{ fontSize: 20 }}>PADRE EUSTÁQUIO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('News')}>
              <Text style={{ fontSize: 20 }}>CENTRO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('News')}>
              <Text style={{ fontSize: 20 }}>SANTA TERESA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('News')}>
              <Text style={{ fontSize: 20 }}>SAVASSI</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('News')}>
              <Text style={{ fontSize: 20 }}>SÃO LUCAS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('News')}>
              <Text style={{ fontSize: 20 }}>CONFINS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    alignItems:"baseline"
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    width:"70%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },

});
export default NewsScreen;
