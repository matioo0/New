import React from 'react';
import { ScrollView, StyleSheet, Linking, Button } from 'react-native';
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

  _openInstagram() {
    Linking.openURL("https://www.instagram.com/mateusz_krainski/")
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <Button
        onPress={this._openInstagram}
        title="Open instagram"
        color="#841584"
        />
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  url: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
