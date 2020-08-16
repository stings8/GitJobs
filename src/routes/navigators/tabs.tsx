import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons'

import Home from '../../pages/home';
import Help from '../../pages/help';
import Profile from '../../pages/profile';
import HomeStack from './HomeNavigator';


const Bottom = createBottomTabNavigator();

const Tabs = () =>  (

<Bottom.Navigator tabBarOptions={{
        style: {
          backgroundColor: '#333',
          borderTopColor: 'rgba(255, 255, 255, 0.3)'
        }
      }}>
        <Bottom.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => <Icon name="user" color={color} size={size} />
          }} />

        <Bottom.Screen
          name="Search"
          component={HomeStack}
          options={{
            tabBarIcon: ({ size, color }) => <Icon name="search" color={color} size={size} />
          }}
        />

        <Bottom.Screen
          name="Help"
          component={Help}
          options={{
            tabBarIcon: ({ size, color }) => <Icon name="help-circle" color={color} size={size} />
          }} />
      </Bottom.Navigator>
)
export default Tabs;
