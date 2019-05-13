import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const Client = t.struct({
  Imie: t.String,
  Nazwisko: t.String,
  Nip: t.String,
  Ulica: t.String,
  Miasto: t.String,
  Kod_Pocztowy: t.String
});

export default class AddInvoiceScreen extends React.Component {

  static navigationOptions = {
    title: 'Dodaj Fakturę',
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {
    return(
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
    )
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
