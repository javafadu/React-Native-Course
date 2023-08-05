import {View, Text} from "react-native";

const Flex1 = () => {
    return ( <View style={{
        backgroundColor: "red", flex: 1
      }}>
        <View style={{ backgroundColor: "green", padding: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 30, color: "white" }} >Section 1</Text>
        </View>
        <View style={{ backgroundColor: "grey", padding: 20, alignItems: "center" }}>
          <Text  style={{ fontSize: 30, color: "white" }}>Section 2</Text>
        </View>
        <View style={{ backgroundColor: "blue", padding: 20, alignItems: "center" }}>
          <Text  style={{ fontSize: 30, color: "white" }}>Section 3</Text>
        </View>
  
      </View>);
}

export default Flex1;