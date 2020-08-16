import React from 'react';

import { TextInput, StyleSheet, View, Text} from'react-native';

import {RectButton} from "react-native-gesture-handler";

import { Feather as Icon } from '@expo/vector-icons'

interface Props {
  title?: string
  searchOpen?: boolean
  searchValue?: string
  onChangeSearchValue?: (value : string) => void
  navigate: () => void
}



const Header: React.FC<Props> = ({title, searchOpen = false, searchValue = '', onChangeSearchValue=() => {}, navigate}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
        <RectButton onPress={() => navigate()} >
          {searchOpen ? <Icon name="arrow-left"  color="#fff" size={24}/> :
          <Icon name="search"  color="#fff" size={24}/> }
        </RectButton>
      {searchOpen && <TextInput autoFocus value={searchValue} onChangeText={onChangeSearchValue} 
      placeholder="Pesquise por ..." style={styles.input}/> }

    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container:{ 
    height: 50,
    backgroundColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24
    

  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"

  },
  input: {
    flex: 1,
    alignSelf: "stretch",
    marginLeft: 8,
    color: '#fff'

  }
  
});