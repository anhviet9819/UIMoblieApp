import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TextInputComp from "../components/TextInputComp.js";
import ButtonComp from "../components/ButtonComp";
import Svg, { Line } from "react-native-svg";

const ContentAsterisk = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {props.children}
      <Text style={{ color: "red" }}>*</Text>
    </View>
  );
};

function Details({ navigation }) {
  const styles = {
    BasicInfo: {
      flexDirection: "row",
      marginTop: 15
    },
    BoldText: {
      fontSize: 19, 
      fontWeight: "bold" 
    },
    Text: {
      fontSize: 17
    }
  }
  return (
    <ScrollView style={{ padding: 16 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.Text}>Mối quan hệ </Text>
        <TextInput
          style={{ height: 24, borderColor: "gray", borderWidth: 0.9, flex: 1, fontSize: 17 }}
          placeholder="Con trai"
        />
      </View>
      <View style={styles.BasicInfo}>
        <Text style={styles.BoldText}>
          Thông tin cá nhân{" "}
        </Text>
        <Svg>
          <Line
            x1="10"
            y1="10"
            x2="270"
            y2="10"
            stroke="black"
            strokeWidth="1"
          />
        </Svg>
      </View>
      <View style={styles.BasicInfo}>
        <Text style={styles.Text}>
          Họ và tên<Text style={{ color: "red" }}>*</Text> Nguyễn Thanh Chính
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.Text}>
          Ngày sinh<Text style={{ color: "red" }}>*</Text> 04/04/2019
        </Text>
        <Text style={styles.Text}>
          Giới tính<Text style={{ color: "red" }}>*</Text> Nam
        </Text>
      </View>
      <View style={styles.BasicInfo}>
        <Text style={styles.Text}>Số CMND/Hộ chiếu    210123456</Text>
      </View>
      <View style={styles.BasicInfo}>
        <Text style={styles.Text}>Nơi cấp Ngày cấp</Text>
      </View>
      <TextInputComp style={{ marginTop: 15 }} placeholder="156321458965">
        <Text style={styles.Text}>Thẻ BHYT</Text>
      </TextInputComp>
      <View style={styles.BasicInfo}>
        <Text style={styles.BoldText}>
          Thông tin liên lạc{" "}
        </Text>
        {/* <Text>--------------------------------------------------------</Text> */}
        <Svg>
          <Line
            x1="10"
            y1="10"
            x2="270"
            y2="10"
            stroke="black"
            strokeWidth="1"
          />
        </Svg>
      </View>
      <TextInputComp style={{ marginTop: 15 }} placeholder="Đà Nẵng">
        <Text style={styles.Text}>
          Tỉnh/Thành phố<Text style={{ color: "red" }}>*</Text>
        </Text>
      </TextInputComp>
      <TextInputComp style={{ marginTop: 15 }} placeholder="Hải Châu">
        <Text style={styles.Text}>
          Quận/Huyện<Text style={{ color: "red" }}>*</Text>
        </Text>
      </TextInputComp>
      <TextInputComp style={{ marginTop: 15 }} placeholder="Hòa Cường Bắc">
        <Text style={styles.Text}>
          Phường/Xã<Text style={{ color: "red" }}>*</Text>
        </Text>
      </TextInputComp>
      <TextInputComp
        style={{ marginTop: 15, marginBottom: 20 }}
        placeholder="344 Đường 2/9"
      >
        <ContentAsterisk>
          <Text style={styles.Text}>Số nhà</Text>
        </ContentAsterisk>
      </TextInputComp>
      <ButtonComp onPress={() => navigation.push("Chi tiết")}>
        <Text style={styles.Text}>Thêm</Text>
      </ButtonComp>
    </ScrollView>
  );
}

export default Details;
