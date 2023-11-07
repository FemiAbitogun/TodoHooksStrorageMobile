import React, { useState } from 'react'

import { Text, View, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
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
            Alert.alert("Alert", "Task can not be empty");
            return;
        }

        edit(ProductIdToEdit, Text_value);
        setOverlayVisibility(false);

    }

    const _onBackdropPress = () => setOverlayVisibility(false)

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity key={item.id} >
                    <View style={styles.productDisplay} >
                        <Text style={styles.productDisplayText}>
                            {item.productName}
                        </Text>

                        <View style={styles.btns}>
                            <Icon name='edit' color="blue" onPress={() => {
                                setOverlayVisibility(true),
                                    setProductIdToEdit(item.id),
                                    setTextValue(item.productName);

                            }} />

                            <Icon name='delete' color="blue" onPress={() => { deleteItem(item.id) }} />
                        </View>



                        <Overlay isVisible={OverlayVisibility} onBackdropPress={_onBackdropPress}>
                            <View style={styles.InputOverlayView}>
                                <Input placeholder="Enter product"
                                    value={Text_value}
                                    onChangeText={(value) => setTextValue(value)} />
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

            </View>

            // null

        )

    }
    return (
        <View>

            <FlatList
                data={Products}
                renderItem={({ item }) => renderItem({ item })}
                keyExtractor={item => item.id}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    productDisplay: {
        width: "100%",
        height: 150,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
        // marginTop: 10,
        marginBottom: 5,








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
        flex: 6,
        fontSize: 18,
        color: "blue",
        flexWrap: "wrap",
        padding: 5,

    }
    ,

    btns: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "space-around"
    },

    InputOverlayView: {
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        width: 270

    }
    ,
    OverlayBtn: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "baseline"
    }
})



export default ListItems