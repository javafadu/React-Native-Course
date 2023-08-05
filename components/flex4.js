import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex4 = () => {
    return (
        <View style={{
            "backgroundColor": "red", flex: 1,
            flexDirection: "row", alignItems: "flex-start",
        }}>
            <View style={{ "backgroundColor": "green", "padding": 20, flex: 1, alignItems: "center" }}>
                <Text style={{fontSize: 24, color: "white"}}>S1</Text>
            </View>
            <View style={{ "backgroundColor": "grey", "padding": 20, flex: 4,  alignItems: "center"  }}>
                <Text style={{fontSize: 24, color: "white"}}>S2</Text>
            </View>
            <View style={{ "backgroundColor": "blue", "padding": 20, flex: 1,  alignItems: "center"  }}>
                <Text style={{fontSize: 24, color: "white"}}>S3</Text>
            </View>

        </View>
    )
}

export default Flex4

const styles = StyleSheet.create({})