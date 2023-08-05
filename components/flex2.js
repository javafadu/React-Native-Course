import { View, Text } from "react-native";

const Flex2 = () => {
    return (<View style={{ backgroundColor: "black", flex: 1 }}>

        <View style={{ backgroundColor: "red", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{color: "white", fontSize: 28}}>Section 1</Text>
        </View>

        <View style={{ backgroundColor: "grey", flex: 2, justifyContent: "center", alignItems: "center" }}>
            <Text style={{color: "white", fontSize: 28}}>Section 2</Text>
        </View>

        <View style={{ backgroundColor: "blue", flex: 3, justifyContent: "center", alignItems: "center" }}>
            <Text style={{color: "white", fontSize: 28}}>Section 3</Text>
        </View>

    </View>);
}

export default Flex2;