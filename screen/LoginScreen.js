import * as React from "react";
import {Text, Button, StyleSheet, View, Image, TextInput} from "react-native";
import ButtonComp from "../components/ButtonComp.js"

function LoginScreen({navigation}) {
    return(
        <View style={styles.container}>
            <View style={{marginTop: 80, marginBottom: 8, width: 285}}>
                <Text style={styles.textSpecial}>ENG</Text>
            </View> 
            <View style={{marginBottom: 20}}>
                <Image style={{width: 250, height: 250}} source={require('../images/download.jpg')} />
            </View>
            <View>
                <TextInput style={styles.textInput} placeholder='Tên đăng nhập' />
            </View>
            <View>
                <TextInput style={styles.textInput} placeholder='*************' />
            </View>
            <View style={{width:260}} >
                <Text style={styles.textSpecial}>Quên mật khẩu?</Text>
            </View>

            <View style={{marginTop: 40, width:260}}>
                {/* <Button
                    title = "Đăng nhập"
                    onPress = {() => navigation.navigate("Đăng ký khám bệnh")}
                /> */}
                <ButtonComp onPress={() => navigation.replace("Đăng ký khám bệnh")}>
                    <Text>Đăng nhập</Text>
                </ButtonComp>
            </View>
            <View style={{marginTop: 10, flexDirection: "row"}}>
                <Text style={{fontSize: 16}}>Bạn chưa có tài khoản? </Text>
                <Text style={styles.textSpecial} onPress={() => navigation.navigate("Thông tin tài khoản")}>
                    Đăng ký tại đây
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textInput: {
        width: 260,
        height: 35,
        fontSize: 16,
        borderColor: "gray",
        borderWidth: 0.9,
        marginBottom: 10
    },
    textSpecial:{
        fontSize: 16,
        color: "blue",
        textDecorationLine: "underline",
        alignSelf: "flex-end"
    }
});

export default LoginScreen;