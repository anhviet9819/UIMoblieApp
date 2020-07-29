import * as React from "react";
import TextInputComp from "../components/TextInputComp";
import {Text, Button, View, StyleSheet} from "react-native";
import ButtonComp from "../components/ButtonComp";

function AccountRegister({navigation}){
    return(
    <View style={{marginTop: 100}}>
        <TextInputComp style={styles.container} placeholder="Tên đăng nhập">
            <Text style={styles.text}>Tên đăng nhập<Text style={{color: "red"}}>*</Text></Text>
        </TextInputComp>
        <TextInputComp style={styles.container} placeholder="Số điện thoại">
            <Text style={styles.text}>Số điện thoại<Text style={{color: "red"}}>*</Text></Text>
        </TextInputComp>
        <TextInputComp style={styles.container} placeholder="Mật khẩu">
            <Text style={styles.text}>Mật khẩu<Text style={{color: "red"}}>*</Text></Text>
        </TextInputComp>
        <TextInputComp style={styles.container} placeholder="Nhập lại mật khẩu">
            <Text style={styles.text}>Nhập lại mật khẩu<Text style={{color: "red"}}>*</Text></Text>
        </TextInputComp>
        <View style = {{padding: 15}}>
            <ButtonComp onPress = {() => navigation.navigate("Xác nhận đăng ký")}>
                <Text>Đăng ký tài khoản</Text>
            </ButtonComp>
        </View> 
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        alignItems: "center" 
    },  
    icon: {
        color: "red"
    },
    text: {
        fontSize: 16
    }
});

export default AccountRegister;
