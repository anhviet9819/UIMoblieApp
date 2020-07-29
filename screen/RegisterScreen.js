import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function RegisterScreen({ navigation }) {
    return (
      <View
        style={{ marginTop: 15, marginBottom: 15, marginLeft: 10, fontSize: 50 }}
      >
        <View style={{ marginTop: 15 }}>
          <Text style={{ color: "blue", fontWeight: "bold", fontSize: 16 }}>
            Bạn đang đặt lịch khám cho ai ?
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Chi tiết")}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              height: 100,
              marginBottom: 5,
              marginRight: 10,
              backgroundColor: "#b6d7a8",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}> Nguyễn Quang Liêm</Text>
            <Icon
              name="ios-arrow-forward"
              style={{ fontSize: 18, fontWeight: "bold", marginRight: 15 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chi tiết")}>
          <View
            style={{
              flexDirection: "row",
              height: 100,
              marginBottom: 50,
              marginRight: 10,
              backgroundColor: "#b6d7a8",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {" "}
              Nguyễn Thanh Chính - Con trai
            </Text>
            <Icon
              name="ios-arrow-forward"
              style={{ fontSize: 18, fontWeight: "bold", marginRight: 15 }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 10,
            color: "red",
          }}
        >
          <Icon name="md-add" style={{ fontSize: 30, fontWeight: "bold" }} />
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
            {" "}
            Thêm người khác
          </Text>
        </View>
      </View>
    );
  }

  export default RegisterScreen;