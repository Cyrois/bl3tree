import React from 'react';
import { Platform, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { RED, RED_BG, YELLOW_FONT } from '../data/constants';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Skills',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/person-white.png')}
      style={{width: 20, height: 20}}
    />
  ),
};

HomeStack.path = '';

const StatsStack = createStackNavigator(
  {
    Links: StatsScreen,
  },
  config
);

StatsStack.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/calculator-white.png')}
      style={{width: 20, height: 20}}
    />
  ),
};

StatsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/bl3Icon.png')}
      style={{width: 20, height: 20}}/>
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  SettingsStack,
  HomeStack,
  StatsStack,
},
{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#6C1D7C',
    inactiveTintColor: 'rgba(0,0,0,0.6)',
    showLabel: false,
    style:{
      backgroundColor: RED_BG,
      height: 50,
      borderColor: RED_BG
    },
    activeTabStyle: {
      backgroundColor: YELLOW_FONT,
      borderBottomWidth: 4,
      borderColor: 'black'
    }
  },
});

tabNavigator.path = '';

export default tabNavigator;
