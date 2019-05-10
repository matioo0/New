import React from 'react';
import { View, FlatList, StyleSheet, Text, Modal, TouchableHighlight, Alert } from 'react-native';
import { ListItem } from 'react-native-elements'
import NavigationBar from 'react-native-navbar';

export default class SelectItemModal extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  leftButtonConfig = {
    title: 'Wroc',
    handler: () => this.setModalVisible(false),
  };

  titleConfig = {
    title: 'Hello, world',
  };

  render() {
    return(
      <View style={styles.container}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          <NavigationBar
            title={this.titleConfig}
            leftButton={this.leftButtonConfig}
          />
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 0,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingRight: 10,
    color: 'grey'
  }
})

module.export = SelectItemModal;
