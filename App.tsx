import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';


import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

import Routes from './src/routes';

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    flex: 1
  }
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <View style={styles.container}>
    <StatusBar barStyle="dark-content"  backgroundColor="transparent" translucent/>
    <NavigationContainer>
    <Routes/>
    </NavigationContainer>
    
    </View>
  );
}