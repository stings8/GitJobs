import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Search from '../../pages/search';
import Home from '../../pages/home';

const Stack = createStackNavigator();

const SearchStack = () => (

    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen
        name="Home" 
        component={Home}/>
        <Stack.Screen 
        name="Search" 
        component={Search}/>
    </Stack.Navigator>

);

export default SearchStack;