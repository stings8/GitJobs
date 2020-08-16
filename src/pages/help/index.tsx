import React from 'react';
import { View, StyleSheet, FlatList, ImageBackground, Text, Image, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';

const Help = () => {
  const infos = [
    {
      id: "0",
      title: "Create & preview your listing",
      description: "See exactly how your listing will look before you publish live. Before creating a listing, you must login with your GitHub account and verify your email address."
    },
    {
      id: "1",
      title: "Pay with a major credit card",
      description: "Invoicing available on request for bulk orders. Email jobs@github.com for more info. Sorry, no recruitment agencies."
    },
    {
      id: "2",
      title: "Your listing goes live immediately",
      description: "Listings are live for 30 days. We’ll send you a receipt and a link to change the listing."
    },
  ];

  function renderItem({item : info}){
    return (
      <View style={styles.card}>
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
    <View style={styles.main}>
      <View>
      <Image source={require('../../assets/logo.png')} />
      <Text style={styles.title}>Como funciona o GitJobs ? </Text>
      <Text style={styles.description}>GitHub Jobs é um ótimo lugar para atrair 
      os melhores talentos técnicos para os cargos de desenvolvimento de software 
      aberto da sua empresa.</Text>
      </View>

      <View>
      <FlatList
        data={infos}
        keyExtractor={(job) =>job.id}
        renderItem={renderItem}
        />
    </View>
    </View>
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
    justifyContent: 'flex-start',
  },

  card: {
    width: '100%',
    height: 200,
    marginBottom: 16
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  image: {
    width: '50%',
    height: 200
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Help;