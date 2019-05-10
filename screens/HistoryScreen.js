import React from 'react';
import { View, FlatList, StyleSheet, Text, Modal, TouchableHighlight, Alert } from 'react-native';
import { ListItem } from 'react-native-elements'
import NavigationBar from 'react-native-navbar';
import SelectItemModal from './SelectItemModal';

export default class HistoryScreen extends React.Component {

  static navigationOptions = {
    title: 'Historia',
  };

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
      <SelectItemModal/>

        <FlatList
          data={[
            {key: 1, client_name: 'Devin Jackson', invoice_number: 'FV/1/2019', invoice_date: '2019-04-12'},
            {key: 2, client_name: 'Devin Jackson', invoice_number: 'FV/2/2019', invoice_date: '2019-04-12'},
            {key: 3, client_name: 'Devin Jackson', invoice_number: 'FV/3/2019', invoice_date: '2019-04-12'},
            {key: 4, client_name: 'Devin Jackson', invoice_number: 'FV/4/2019', invoice_date: '2019-04-12'},
            {key: 5, client_name: 'Devin Jackson', invoice_number: 'FV/5/2019', invoice_date: '2019-04-12'},
            {key: 6, client_name: 'Devin Jackson', invoice_number: 'FV/6/2019', invoice_date: '2019-04-12'},
            {key: 7, client_name: 'Devin Jackson', invoice_number: 'FV/7/2019', invoice_date: '2019-04-12'},
            {key: 8, client_name: 'Devin Jackson', invoice_number: 'FV/8/2019', invoice_date: '2019-04-12'}
          ]}
          renderItem={({item}) =>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <ListItem
                title={item.invoice_number}
                subtitle={
                  <View style={styles.subtitleView}>
                    <Text style={styles.ratingText}>{item.client_name}</Text>
                    <Text style={styles.ratingText}>{item.invoice_date}</Text>
                  </View>
                }
              />
            </TouchableHighlight>


          }
          keyExtractor={(item, index) => item.key.toString()}
        />
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
