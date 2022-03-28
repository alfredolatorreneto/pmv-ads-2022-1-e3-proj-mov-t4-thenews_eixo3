import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './Profile'
import Chat from  './Chat'
import Home from './Home'
import Bairro from './Neighborhood'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="News"
          tabBarOptions={{
            activeTintColor: '#C68585',
          }}>
          {/*<Tab.Screen
            name="Home Stack"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />*/}

          <Tab.Screen
            name="Bairros"
            component={Bairro}
            options={{
              tabBarLabel: 'News',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="newspaper-variant"
                  color={color}
                  size={size}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Chat Stack"
            component={Chat}
            options={{
              tabBarLabel: 'Chat',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chat" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Profile Stack"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-settings"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
    
  );
};


export default HomeScreen;
