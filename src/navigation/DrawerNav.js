import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/appStack/Home';
import Profile from '../screen/appStack/Profile';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const DrawerNav = ({navigation}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
