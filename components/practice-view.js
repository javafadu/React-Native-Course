import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const PracticeView = () => {

    const [city, setCity] = useState("");
    const [cities, setCities] = useState([]);

    const addCity = () => {
        setCities([...cities, city]);
    }


    return (
        <View style={styles.screen}>


            {/* input */}
            <TextInput
                placeholder='Where are you?'
                value={city}
                onChangeText={(text) => setCity(text)}
                style={styles.input} />

            {/* button */}
            <Button
                title="Add" color="red"
                onPress={addCity} />

            {/* list */}
            <ScrollView>
                {cities.map((item, index) => (
                    <View style={styles.listElement} key={index}>
                        <Text>{item}</Text>
                    </View>
                ))}
            </ScrollView>



        </View>
    )
}

export default PracticeView

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    input: {
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,

    },
    listElement: {
        backgroundColor: "grey",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    }
})