import React from 'react'
import { Text, View, StyleSheet } from 'react-native';



function Header() {
    return (
        <View style={null}>
            <Text style={styles.textColor} > Todo Items... </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    textColor: {
        color: "white",
        fontSize: 25,
        fontStyle: "normal"
    }

})

export default Header