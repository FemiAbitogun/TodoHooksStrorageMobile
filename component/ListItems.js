import React, { useState } from 'react'

import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Icon, Input, Overlay, Button } from 'react-native-elements';

function ListItems(props) {

    const [Text_value, setTextValue] = useState("");
    const [OverlayVisibility, setOverlayVisibility] = useState(false);
    const [ProductIdToEdit, setProductIdToEdit] = useState("");


    let { Products } = props.globalObject;
    let { deleteItem, edit } = props;

    const editBtn = (ProductIdToEdit) => {
     
        // console.log(Text_value)
        if (!Text_value) {
            console.log("edit btn clicked.....")
            Alert.alert("Alert", "Task can not be empty");
            return;
        }

        edit(ProductIdToEdit, Text_value);
        setOverlayVisibility(false);

    }

    const _onBackdropPress = () => setOverlayVisibility(false)


    return (
        <View>
            {
                Products.map((product) => {
                    return (
                        <TouchableOpacity key={product.id} >
                            <View style={styles.productDisplay}>
                                <Text style={styles.productDisplayText}>
                                    {product.productName}
                                </Text>

                                <Icon name='edit' color="blue" onPress={() => {
                                    setOverlayVisibility(true),
                                    setProductIdToEdit(product.id)
                                
                                }} />

                                <Icon name='delete' color="blue" onPress={() => { deleteItem(product.id) }} />

                                <Overlay isVisible={OverlayVisibility} onBackdropPress={_onBackdropPress}>
                                    <View style={styles.InputOverlayView}>
                                        <Input placeholder="Enter product" onChangeText={(value) => setTextValue(value)} />
                                    </View>

                                    <View style={styles.OverlayBtn}>
                                        <Button title="Save"
                                            buttonStyle={{
                                                width: 80
                                            }}

                                            onPress={() => editBtn(ProductIdToEdit)}

                                        />
                                        <Button title="Cancel" buttonStyle={{
                                            backgroundColor: "crimson",
                                            width: 80
                                        }} onPress={() => setOverlayVisibility(false)} />
                                    </View>

                                </Overlay>


                            </View>
                        </TouchableOpacity>


                    )
                })

            }

        </View>
    )
}



const styles = StyleSheet.create({


    productDisplay: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        backgroundColor: "white",
        marginTop: 10,








        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.95,
        shadowRadius: 8.97,

        elevation: 10,
        zIndex: 5


    },

    productDisplayText: {
        fontSize: 20,
        color: "blue"
    }
    ,

    InputOverlayView: {
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        width: 270

    }
    ,
    OverlayBtn: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "baseline"
    }
})



export default ListItems