import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexPractice = () => {
    return (
        <View style={styles.screen}>

            {/* üst turuncu */}
            <View style={styles.orangeBox}>
                <Text style={styles.headerText}>ASWA Group</Text>
                <View style={[styles.button, { width: 40, height: 40 }]}></View>
            </View>

            {/* orta beyaz */}
            <View style={styles.content}>
                <View style={styles.image1}></View>

                <Text style={styles.loremText}>
                    <Text style={{ fontWeight: "bold" }}>
                        Lorem Ipsum
                    </Text> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>

                <View style={styles.imageLine}>
                    <View style={styles.image2}></View>
                    <View style={styles.image3}></View>
                </View>

            </View>

            {/* alt turuncu */}
            <View style={[styles.orangeBox, { gap: 15 }]}>
                <View style={[styles.button, styles.altButton]}></View>
                <View style={[styles.button, styles.altButton]}></View>
                <View style={[styles.button, styles.altButton]}></View>
            </View>

        </View>
    )
}

export default FlexPractice

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
    },
    orangeBox: {
        backgroundColor: "orange",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    headerText: {
        fontSize: 25,
        color: "white"
    },
    button: {
        backgroundColor: "grey",
        borderRadius: 5,
    },
    altButton: {
        flex: 1,
        height: 50
    },
    content: {
        flex: 1,
        padding: 20
    },
    image1: {
        backgroundColor: "grey",
        width: "100%",
        height: 100,
    },
    loremText: {
        marginVertical: 20,
    },

    imageLine: {
        flexDirection: "row",
        gap: 20,
    },

    image2: {
        backgroundColor: "grey",
        flex: 1,
        height: 100,
    },
    image3: {
        backgroundColor: "grey",
        flex: 2,
        height: 100
    }

})