import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableHighlight, Alert } from 'react-native';
import { ListItem } from 'react-native-elements'
import NavigationBar from 'react-native-navbar';
import SelectItemModal from './SelectItemModal';

export default class ClientsScreen extends React.Component {

  static navigationOptions = {
    title: 'Klienci',
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
            {key: 1, client_name: 'Devin Jackson', },
            {key: 2, client_name: 'Devin Jackson', },
            {key: 3, client_name: 'Devin Jackson', },
            {key: 4, client_name: 'Devin Jackson', },
            {key: 5, client_name: 'Devin Jackson', },
            {key: 6, client_name: 'Devin Jackson', },
            {key: 7, client_name: 'Devin Jackson', },
            {key: 8, client_name: 'Devin Jackson', }
          ]}
          renderItem={({item}) =>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <ListItem
                title={item.client_name}
                subtitle={
                  <View style={styles.subtitleView}>

                    <Text style={styles.ratingText}></Text>
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
     paddingTop: 5
    },
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 0,
      paddingTop: 1
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
