import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements'

//import component
import Home from './src/screens/Home';
import Bookmark from './src/screens/Bookmark';
import Categories from './src/screens/Categories';
import Setting from './src/screens/Setting';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    HomePage: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name='home' />,
      },
    },

    Categories: {
      screen: Categories,
      navigationOptions: {
        tabBarLabel: 'Categories',
        tabBarIcon: () => <Icon name='apps' />,
      },
    },
    Bookmark: {
      screen: Bookmark,
      navigationOptions: {
        tabBarLabel: 'BookMark',
        tabBarIcon: () => <Icon name='bookmark' />,
      },
    },

    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: () => <Icon name='settings' />,
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    },
  },
);

const StackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator,
});

export default createAppContainer(StackNavigator);