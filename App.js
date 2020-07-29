import * as React from "react";
import { Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import RegisterScreen from "./screen/RegisterScreen.js";
import Details from "./screen/DetailsScreen.js";
import LoginScreen from "./screen/LoginScreen.js";
import AccountRegister from "./screen/AccountRegisterScreen";
import ConfirmRegistration from "./screen/ConfirmRegistration";
import TabViewExample from "./screen/ProfileScreen.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const icon = <FontAwesome5 name={"comments"} />;

const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./images/rightIcon.png")}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen
          name="Đăng nhập"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen
          name="Đăng ký khám bệnh"
          component={TabTab}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen
          name="Thông tin tài khoản"
          component={AccountRegister}
        />
        <LoginStack.Screen
          name="Xác nhận đăng ký"
          component={ConfirmRegistration}
          options={{ headerShown: false }}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Fourth</Text>
    </View>
  );
}

function TabTab({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Đăng ký khám") {
            iconName = focused ? "md-medkit" : "md-medkit";
          } else if (route.name === "Hồ sơ") {
            iconName = focused ? "ios-list" : "ios-list";
          } else {
            iconName = focused ? "ios-settings" : "ios-settings";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "black",
        activeBackgroundColor: "#91c57a",
        inactiveBackgroundColor: "#dedede",
        labelStyle: { fontSize: 14, fontWeight: "bold" },
        style: { height: 60 },
      }}
    >
      <Tab.Screen name="Home">
        {() => (
          <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Đăng ký khám">
        {() => (
          <RegisterStack.Navigator>
            <RegisterStack.Screen         // Stack 1
              name="Đăng ký khám"
              component={RegisterScreen}
              options={{
                title: false,
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginStart: 13 }}
                  >
                    <Text style={{ fontSize: 18 }}>
                      <Icon
                        name="ios-arrow-back"
                        style={{ fontSize: 18, fontWeight: "bold" }}
                      />{" "}
                      Quay lại
                    </Text>
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                      marginEnd: 15,
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 5,
                      backgroundColor: "pink",
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {" "}
                      Hủy{" "}
                      <Icon
                        name="ios-arrow-forward"
                        style={{ fontSize: 18, fontWeight: "bold" }}
                      />
                    </Text>
                  </TouchableOpacity>
                ),
              }}
            />
            <RegisterStack.Screen       //Stack 2
              name="Chi tiết"
              component={Details}
              options={{
                title: false,
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginStart: 13 }}
                  >
                    <Text style={{ fontSize: 18 }}>
                      <Icon
                        name="ios-arrow-back"
                        style={{ fontSize: 18, fontWeight: "bold" }}
                      />{" "}
                      Quay lại
                    </Text>
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.replace("Đăng ký khám")}
                    style={{
                      marginEnd: 15,
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 5,
                      backgroundColor: "pink",
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {" "}
                      Hủy{" "}
                      <Icon
                        name="ios-arrow-forward"
                        style={{ fontSize: 18, fontWeight: "bold" }}
                      />
                    </Text>
                  </TouchableOpacity>
                ),
              }}
            />
          </RegisterStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Hồ sơ">
        {() => (
          <ProfileStack.Navigator>
            <ProfileStack.Screen
              name="Hồ sơ sức khỏe"
              component={TabViewExample}
            />
          </ProfileStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Cài đặt">
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen name="Cài đặt" component={SettingsScreen} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
