import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex5 = () => {
    return (
        <View style={{
            "backgroundColor": "red", "flex": 1,
            flexDirection: "column", justifyContent: "flex-end",
        }}> 

        {/* sectionlar */}
            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}>
                {/* kutu 1 */}
                <View style={{ "backgroundColor": "green", "padding": 20, "borderRadius": 10 }}>
                    <Text style={{ "color": "white", "fontSize": 24 }}>Section 1</Text>
                </View>

                {/* kutu 2 */}
                <View style={{ "backgroundColor": "grey", "padding": 20, "borderRadius": 10 }}>
                    <Text style={{ "color": "white", "fontSize": 24 }}>Section 2</Text>
                </View>
            </View>

            {/* alttaki boşluk */}
            <View style={{ "height": 40 }}>

            </View>
        </View>


    )
}

export default Flex5

const styles = StyleSheet.create({})