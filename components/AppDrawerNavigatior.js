import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';

import customSideBarMenu from './customSideBarMenu'
import { BottomNavigator } from './BottomNavigator';
import  settings  from './settings';

import LoginScreen from '../screens/LoginScreen'

export const AppDrawerNavigator = createDrawerNavigator(
 {
   Home:{screen:BottomNavigator},
   Settings:{screen:settings}
 },
 {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName : "Home"
    }
 )