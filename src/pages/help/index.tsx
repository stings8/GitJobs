import React from 'react';
import { View, StyleSheet, FlatList, ImageBackground, Text, Image, SafeAreaView } from 'react-native';

const Help = () => {
  const infos = [
    {
      id: "0",
      title: "Como funciona o GitJobs ?",
      description: "GitHub Jobs é um ótimo lugar para atrair os melhores talentos técnicos para os cargos de desenvolvimento de software aberto da sua empresa."
    },
    {
      id: "1",
      title: "Create & preview your listing",
      description: "See exactly how your listing will look before you publish live. Before creating a listing, you must login with your GitHub account and verify your email address."
    },
    {
      id: "2",
      title: "Pay with a major credit card",
      description: "Invoicing available on request for bulk orders. Email jobs@github.com for more info. Sorry, no recruitment agencies."
    },
    {
      id: "3",
      title: "Your listing goes live immediately",
      description: "Listings are live for 30 days. We’ll send you a receipt and a link to change the listing."
    },
  ];

  function renderItem({item : info}){
    return (
      <View>
        <Text style={styles.title}>
          {info.title}
        </Text>
        <Text style={styles.description} >
          {info.description}
        </Text>
    </View>
    );
  }

  return (
    <ImageBackground  
    source={require('../../assets/background.png')} 
    style={styles.container}
    resizeMode="cover"
    > 
    <View >
      <Image source={require('../../assets/logo.png')} />
      </View>
      <FlatList
        data={infos}
        keyExtractor={(job) =>job.id}
        renderItem={renderItem}
        />
    </ImageBackground>)
  ;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f5'
  },

  main: {
    flex: 1,
  },

  title: {
    color: '#333',
    fontSize: 24,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 24,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  itemDesc: {
    flex: 1,
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },

});

export default Help;