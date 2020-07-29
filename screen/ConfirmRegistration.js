import * as React from "react";
import { Button, Text, Image, View } from "react-native";
import ButtonComp from "../components/ButtonComp.js"

function ConfirmRegistration({ navigation }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ marginTop: 100, width: 50, height: 50 }}
        source={require("../images/rightIcon.png")}
      />
      <Text style={{ fontSize: 20, marginTop: 5 }}>
        Bạn đã đăng ký tài khoản thành công
      </Text>
      <View style={{ marginTop: 140, width: 270 }}>
        <ButtonComp onPress={() => navigation.popToTop()}>
          <Text>Đóng</Text>
        </ButtonComp>
      </View>
    </View>
  );
}

export default ConfirmRegistration;
