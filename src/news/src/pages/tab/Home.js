import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Clique no icone abaixo para postar
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('PostMessage')
            }>
            
            <Text style={{fontSize:50}}>+</Text>

          </TouchableOpacity>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius:10,
  },
});
export default HomeScreen;