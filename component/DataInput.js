import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

function DataInput(props) {
    const { submit } = props;
    const [inpuText, setInputText] = useState("");

    const clearInputText = () => {
        setInputText("");
        return null;
    }
    return (
        <View style={styles.InputSection}>
            <Input placeholder='Add Task' style={{ padding: 10 }} onChangeText={(text_) => setInputText(text_)} value={inpuText} />
            <Button title="Submit" onPress={() => { submit(inpuText); clearInputText() }} />
        </View>
    )
}


const styles = StyleSheet.create({

    InputSection: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 1,



    }


})


export default DataInput