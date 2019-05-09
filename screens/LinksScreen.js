import React from 'react';
import { ScrollView, StyleSheet, Linking } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  componentDidMount() {
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

componentDidMount() {
  Linking.addEventListener('https://www.instagram.com/mateusz_krainski/', this._handleOpenURL);
}
componentWillUnmount() {
  Linking.removeEventListener('https://www.instagram.com/mateusz_krainski/', this._handleOpenURL);
}
_handleOpenURL(event) {
  console.log(event.url);
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));}

  conststyles = StyleSheet.create({
    url: {
      flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
},
};
