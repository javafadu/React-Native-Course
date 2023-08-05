import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Position = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.fab}>
                <Text style={styles.plus}>+</Text>
            </View>

        </View>
    )
}

export default Position

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#EECCDD",
        flex: 1
    },
    fab: {
        backgroundColor: "blue",
        width: 70,
        height: 70,
        position: "absolute",
        bottom: 10,
        right: 10,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "white",
        borderWidth: 2

    },
    plus: {
        fontSize: 24,
        color: "white",

    }
})