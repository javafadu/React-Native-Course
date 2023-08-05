import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles.js'


const Flex8 = () => {
    return (
        <View style={{
            backgroundColor: "red",
            flex: 1,
            paddingTop: StatusBar.currentHeight + 10,
            paddingHorizontal: 10,
            gap: 30


        }}>

            {/* First Row */}
            <View style={{ alignItems: "center" }}>
                <View style={{ backgroundColor: "green", padding: 30 }}>
                    <Text>S1</Text>
                </View>
            </View>


            {/* Second Row */}
            <View style={{ alignItems: "stretch" }}>
                <View style={globalStyles.greenBox}>
                    <Text>S2</Text>
                </View>
            </View>

            {/* Third Row */}
            <View style={{ alignItems: "flex-end" }}>
                <View style={{ backgroundColor: "green", padding: 30, alignItems: "center" }}>
                    <Text>S3</Text>
                </View>
            </View>

            {/* Fourth Row */}
            <View style={{ alignItems: "flex-start" }}>
                <View style={{ backgroundColor: "green", padding: 30, alignItems: "center" }}>
                    <Text>S3</Text>
                </View>
            </View>





        </View>
    )
}

export default Flex8

const styles = StyleSheet.create({})