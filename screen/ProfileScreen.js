import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import PatientCalendar from "./Profile1Screen.js";

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ffffff" }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const initialLayout = { width: Dimensions.get("window").width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Lịch hẹn khám" },
    { key: "second", title: "Các lần khám trước" },
    { key: "third", title: "Hồ sơ cá nhân" },
  ]);

  const renderScene = SceneMap({
    first: PatientCalendar,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white", height: 4 }}
      style={{ backgroundColor: "#91c57a" }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 8, fontSize: 16, fontWeight: "bold" }}>
          {route.title}
        </Text>
      )}
      activeColor="black"
      inactiveColor="white"
      tabStyle={{ height: 60, borderRadius: 5, activeColor: "white" }}
      //indicatorContainerStyle={{borderColor: "white", borderWidth: 5}}
      getAccessibilityLabel={({ route }) => route.accessibilityLabel}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
