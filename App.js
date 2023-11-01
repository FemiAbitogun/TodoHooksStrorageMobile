
import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import ListItems from './component/ListItems';
import DataInput from './component/DataInput';
import Header from './component/Header';

export default function App() {

  const [Products, setProducts] = useState([
    { id: 1, productName: "Laptop" },
    { id: 2, productName: "Arduino" },
    { id: 3, productName: "RaspberryPi" },
  ]);

  let globalObject = {
    Products, setProducts
  }


  const edit = (textId,text_value) => {



    
    if (text_value =="") {

      Alert.alert("Alert", "Task can not be empty");
      return;
    }

    Alert.alert("Warning", "Edit item?!", [
      {
        text: "Yes", onPress: () => {
          setProducts(
            Products.filter((product) => product.id !== textId)
          );

          setProducts(previousProduct => [...previousProduct, { id: textId, productName: text_value }]);

        }
      },
      {
        text: "No", onPress: () => null
      }
    ])
  }



  const submit = (text_value) => {
    if (text_value === "") {

      Alert.alert("Alert", "Task can not be empty");
      return;
    }

    let randomId = Math.random().toString();

    Alert.alert("Warning", "Add new Item?!", [
      {
        text: "Yes", onPress: () => {
          setProducts(previousProduct => [...previousProduct, { id: randomId, productName: text_value }]);
        }
      },
      {
        text: "No", onPress: () => null
      }
    ])
  }

  const deleteItem = (id) => {

    Alert.alert("Warning", "Are you sure you want to delete?!", [
      {
        text: "Yes", onPress: () => {
          setProducts(
            Products.filter((product) => product.id !== id)
          )
        }
      },
      {

        text: "No", onPress: () => null
      }
    ])






  }






  return (

    <TouchableWithoutFeedback onPress={
      () => Keyboard.dismiss()}>
      <View style={styles.container}>

        <View style={styles.Header}>
          <Header />
        </View>

        <View style={styles.body}>
          <DataInput setProducts={setProducts} submit={submit} />
          <ListItems globalObject={globalObject} deleteItem={deleteItem} edit={edit}/>
        </View>

        <View style={styles.footer}>

        </View>
      </View>
    </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    flex: 1,
    width: "100%",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }
  ,
  body: {
    flex: 8,
    padding: 10
  },

  footer: {
    flex: 1
  }

}); 
