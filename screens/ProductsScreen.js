import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const Client = t.struct({
  Name_of_product: t.String,
  amount: t.String,
  Date: t.String,
  City: t.String,
  Price: t.String
});

export default class ProductsScreen extends React.Component {

  static navigationOptions = {
    title: 'Usługi',
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
            title="Dodaj Produkt"
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
