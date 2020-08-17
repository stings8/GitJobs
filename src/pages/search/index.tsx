import React, { useState, useCallback} from 'react';
import { View, StyleSheet, FlatList, Text, Image, ActivityIndicator } from 'react-native';
import api from '../../services/api';
import {RectButton} from 'react-native-gesture-handler'
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

interface Job {
  id: string;
  company: string;
  company_logo: string;
  company_url: string;
  location: string;
  type: string;
  description: string;

 }



const Search = () => {
  const searchDelay = 2000;
  const {goBack} = useNavigation();
 
  const [searchValue, setSearchValue] = useState(''); 

  const [jobs, setJobs] = useState<Job[]>([]);

  const [searchTask, setSearchTask] = useState(null);

  const [fetching, setFetching] = useState(false);

  const handleChange = (value) => {
    if (!searchValue) {
      setJobs([])
    }
    if(searchTask) {
      clearTimeout(searchTask)
    } 
    setSearchTask(setTimeout(()=>{
      handleSearchJob()
    }, searchDelay))
    setSearchValue(value)
  }

  const handleSearchJob = useCallback(async() => {
    if (searchValue) {
      setFetching(true)
      const response = await api.get<Job[]>(`?description=${searchValue}&page=1`);
      const result = response.data;
      console.log(result)
      setJobs(result);
      setFetching(false);
      setSearchValue('')
    }
   
  }, [searchValue]);

  


  function renderItem({ item})  {
    return (
      <RectButton style={styles.jobItem}>
          { item.company_logo ? <Image style={styles.companyLogo} source={{ uri: item.company_logo }}/> :
          <Image style={styles.companyLogo} source={require('../../assets/briefcase.png')}/> }
      

          <View style={styles.jobInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>Empresa : {item.company}</Text>
          <Text>Tipo : {item.type}</Text>
          </View>
      </RectButton>
    );
  }

  if (fetching) {
    return (

    <>
      <Header navigate={goBack} searchOpen={true} searchValue={searchValue} onChangeSearchValue={handleChange}/>
      <View style={styles.loadingContainer}> 
        <ActivityIndicator color="#333" size={50} style={styles.loading}/>
      </View>
    </>
    );
  }
  return (
  <View style={styles.main}> 
    <Header navigate={goBack} searchOpen={true} searchValue={searchValue} onChangeSearchValue={handleChange}/>
    <FlatList
      data={jobs}
      keyExtractor={(job) =>job.id}
      renderItem={renderItem}
    >
    </FlatList> 
  </View>);
};

const styles = StyleSheet.create({

  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },

  loading: {
    
  },

  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f5'

  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  jobInfo: {
    flexDirection: 'column'
  },


  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginEnd: 8
  },

  jobItem: {
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },


  description: {
    color: '#6C6C80',
    fontSize: 14,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  title: {
    fontSize: 16,
    color: '#333',
    maxWidth: 260,
    fontFamily: 'Ubuntu_700Bold',
    fontWeight: 'bold'
  }


  
});

export default Search;