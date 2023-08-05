import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex3 = () => {
    return (
        <View style={{ "backgroundColor": "red", flex: 1, flexDirection: "row", alignItems: "flex-start"}}>

            <View style={{ "backgroundColor": "green", "padding": 30 }}>
                <Text style={{"fontSize": 20, "color": "white"}}>S1</Text>
            </View>
            <View style={{ "backgroundColor": "grey", "padding": 30  }}>
                <Text style={{"fontSize": 20, "color": "white"}}>S2</Text>
            </View>
            <View style={{ "backgroundColor": "blue", "padding": 30  }}>
                <Text style={{"fontSize": 20, "color": "white"}}>S3</Text>
            </View>


        </View>
    )
}

export default Flex3

const styles = StyleSheet.create({})