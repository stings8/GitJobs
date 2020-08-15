import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon} from '@expo/vector-icons'

import Home from './pages/home';
import Help from './pages/help';
import Profile from './pages/profile';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        style: {
          backgroundColor: '#000',
          borderTopColor: 'rgba(255, 255, 255, 0.3)'
        }
      }}>
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({size, color}) => <Icon name="user" color={color}  size={size}/>
        }} />

        <Tab.Screen 
        name="Search" 
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => <Icon name="search" color={color} size={size}/>
        }}
         />
  
        <Tab.Screen 
        name="Help" 
        component={Help} 
        options={{
          tabBarIcon: ({size, color}) => <Icon name="help-circle" color={color}  size={size}/>
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;