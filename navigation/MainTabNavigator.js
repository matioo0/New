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

<<<<<<< HEAD
 ClientsStack.navigationOptions = {
=======
ClientsStack.navigationOptions = {
>>>>>>> 7ca60aa124974c565f47d92793c00983d4b0cce7
  tabBarLabel: 'Klienci',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-man`
<<<<<<< HEAD
          : 'md-idcard'
=======
          : 'md-plus'
>>>>>>> 7ca60aa124974c565f47d92793c00983d4b0cce7
      }
    />
  ),
};
<<<<<<< HEAD

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

=======
// const UserStack = createStackNavigator({
//   User: UsersScreen,
// });
//
// UserStack.navigationOptions = {
//   tabBarLabel: 'User',
//   tabBarIcon: ({focused}) => (
//     <TabBarIcon
//     focused={focused}
//     name={
//       Platform.OS === 'ios'
//       ? 'ios-link'  : 'md-link'
//     }
//     />
//   ),
// };
//
// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });
//
// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };
//
// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });
//
// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };
>>>>>>> 7ca60aa124974c565f47d92793c00983d4b0cce7

export default createBottomTabNavigator({
  HistoryStack,
  ClientsStack,
  AddInvoiceStack,
  ProductsStack,
  SettingsStack
});
