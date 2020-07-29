import React from 'react';
import { View, Text, TextInput } from 'react-native';

const TextInputComp = (props) => {
    const styles = {
        container: {
            fontWeight: "bold",
            flexDirection: "row",
            justifyContent: 'space-between',
            flexWrap: "wrap",
            alignItems: 'center',  
        },
        inputBox: {
            flex: 3,
            height: 25,
            borderColor: 'gray',
            borderWidth: 0.9,
            fontSize: 16
            //borderRadius: 3,
        },
        text: {
            flex: 2,
            flexDirection: 'row',
            fontSize: 17
        }
    }
    return(
        <View style = {props.style} > 
            <View style = {styles.container}>
                <View style={styles.text}>{props.children}</View>
                <TextInput style={styles.inputBox} placeholder={props.placeholder} ></TextInput>
            </View>
        </View>
    );
}

export default TextInputComp;