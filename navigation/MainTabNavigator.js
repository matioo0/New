import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AddInvoiceScreen from '../screens/AddInvoiceScreen';
import ClientsScreen from '../screens/ClientsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HistoryStack = createStackNavigator({
  History: HistoryScreen,
});

HistoryStack.navigationOptions = {
  tabBarLabel: 'Historia',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-bookmarks`
          : 'md-bookmarks'
      }
    />
  ),
};

const AddInvoiceStack = createStackNavigator({
  AddInvoice: AddInvoiceScreen,
});

AddInvoiceStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add`
          : 'md-plus'
      }
    />
  ),
};

const ClientsStack = createStackNavigator({
  Clients: ClientsScreen,
});

 ClientsStack.navigationOptions = {
  tabBarLabel: 'Klienci',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-man`
          : 'md-idcard'
      }
    />
  ),
};

const ProductsStack = createStackNavigator({
  Products: ProductsScreen,
});

ProductsStack.navigationOptions = {
  tabBarLabel: 'Usługi',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-swap`
          : 'md-bookmarks'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Ustawienia',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-settings`
          : 'md-bookmarks'
      }
    />
  ),
};


export default createBottomTabNavigator({
  HistoryStack,
  ClientsStack,
  AddInvoiceStack,
  ProductsStack,
  SettingsStack
});
