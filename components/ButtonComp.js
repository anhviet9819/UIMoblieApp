import * as React from "react";
import { TouchableOpacity, Text, Button, StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
//import { NavigationContainer } from "@react-navigation/native";

const ButtonComp = (props) => {
    const styles={
        container: {
            backgroundColor: "#2e3094",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            height: 40
        },
        children: {
            color: "white",
            fontSize: 16,
            fontWeight: "bold"
        }
    }
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress} >
            <View>
                <Text style={styles.children}>{props.children}</Text>
            </View> 
        </TouchableOpacity>
    );
}

export default ButtonComp;