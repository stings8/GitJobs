import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';


import {useNavigation, useRoute} from '@react-navigation/native';

import Header from "../../components/Header";


const Home = () => {
  const {navigate} = useNavigation();
  const {name} = useRoute();

  const handleNavigate = () => {
    navigate('Search')
  }

  return (

  <ImageBackground  
  source={require('../../assets/background.png')} 
  style={styles.container}
  resizeMode="cover"
  > 
  <Header navigate={handleNavigate} title={name}/>
  <View style={styles.main}>
    <View style={styles.content}>
        <Image  style={styles.img}
        source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Busque sua oportunidade </Text>
    </View>
    
  </View>

  

  </ImageBackground>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
   
  },

  img: {
    //marginBottom: '70%',
  },

  content: {
    marginBottom: '90%'
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
     
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    justifyContent: 'center',
    maxWidth: '80%',
    marginTop: 0,
  },

});

export default Home;