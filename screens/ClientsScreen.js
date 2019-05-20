import React from 'react';
import { View, FlatList, StyleSheet, Text, Modal, TouchableHighlight, Alert, Button, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import NavigationBar from 'react-native-navbar';
import SelectItemModal from './SelectItemModal';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import t from 'tcomb-form-native'; // 0.6.9

//ddddddddddddddddddddddddddddddddd
const Form = t.form.Form;

const Client = t.struct({
  name: t.String,
  nip: t.String,
  street: t.String,
  city: t.String,
  postCode: t.String
});

export default class ClientsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {

      title: 'Klienci',
      headerRight: (
        <Button
          onPress={navigation.getParam('showModal')}
          title="Dodaj"
          color="#0000ff"
        />
      )
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      modalVisible: false
    };
  }

  showModal = () => {
    this.setState({modalVisible: true});
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  leftButtonConfig = {
    title: 'Wroc',
    handler: () => this.setModalVisible(false),
  };

  titleConfig = {
<<<<<<< HEAD
    title: 'Formularz Klienta',
=======
    title: 'Hello, world',
>>>>>>> 7ca60aa124974c565f47d92793c00983d4b0cce7
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
<<<<<<< HEAD
    fetch('http://192.168.100.87:5000/users', {
=======
    fetch('http://192.168.8.104:5000/users', {
>>>>>>> 7ca60aa124974c565f47d92793c00983d4b0cce7
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    }).then(response => {
      this.setModalVisible(false)
      this.fetchClientsList()
    })
    console.log('value: ', value);
  }

  componentDidMount() {
    this._componentFocused();
    this.props.navigation.setParams({ showModal: this.showModal });
    this._sub = this.props.navigation.addListener(
      'didFocus',
      this._componentFocused
    );

  }

  componentWillUnmount() {
    this._sub.remove();
  }

  _componentFocused = () => {
    this.fetchClientsList()
  }

  fetchClientsList() {
<<<<<<< HEAD
    fetch('http://192.168.100.87:5000/users')
=======
    fetch('http://192.168.8.104:5000/users')
>>>>>>> 7ca60aa124974c565f47d92793c00983d4b0cce7
    .then(response => response.json())
    .then(data => data[0])
    .then(data => this.setState({ data }));
  }

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
        <View style={styles.container}>
          <ScrollView>
            <Form
            ref={c => this._form = c}
            type={Client} />
            <Button
              title="Dodaj klienta"
              onPress={this.handleSubmit}
            />
          </ScrollView>
        </View>
      </Modal>

        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <ListItem
                title={item.nip}
                subtitle={
                  <View style={styles.subtitleView}>
                    <Text style={styles.ratingText}>{item.name}</Text>
                    <Text style={styles.ratingText}>{item.street}</Text>
                  </View>
                }
              />
            </TouchableHighlight>


          }
          keyExtractor={(item, index) => item.id.toString()}
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
