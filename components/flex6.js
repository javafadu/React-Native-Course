import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex6 = () => {
    return (
        <View style={{ "backgroundColor": "red", "flex": 1, padding: 15, justifyContent: 'space-between' }}>

            {/* üstteki satır */}
            <View style={{ flexDirection: "row", gap: 20 }}>
                {/* ilk kutu */}
                <View style={{
                    "backgroundColor": "green", padding: 20,
                    flex: 1, alignItems: "center", borderRadius: 10
                }}>
                    <Text style={{ fontSize: 20, color: "white" }}>S1</Text>
                </View>

                <View style={{
                    "backgroundColor": "grey", padding: 20, flex: 2,
                    alignItems: "center", borderRadius: 10
                }}>
                    <Text style={{ fontSize: 20, color: "white" }}>S2</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", gap: 20 }}>
                {/* ilk kutu */}
                <View style={{
                    "backgroundColor": "grey", padding: 20,
                    flex: 2, alignItems: "center", borderRadius: 10
                }}>
                    <Text style={{ fontSize: 20, color: "white" }}>S3</Text>
                </View>

                <View style={{
                    "backgroundColor": "green", padding: 20, flex: 1,
                    alignItems: "center", borderRadius: 10
                }}>
                    <Text style={{ fontSize: 20, color: "white" }}>S4</Text>
                </View>
            </View>


        </View>
    )
}

export default Flex6

const styles = StyleSheet.create({})