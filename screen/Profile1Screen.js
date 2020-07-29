import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Timeline from "react-native-timeline-flatlist";

export default class PatientCalendar extends Component {
  constructor() {
    super();
    this.data = [
      {
        title: "Nguyễn Thanh Chính            11/04/2020",
        description:
          " B.S Trần Quang A\n BV Bệnh nhiệt đới TW, Hà Nội \n Chuyên khoa Nhi ",
      },
      {
        title: "Nguyễn Quang Liêm             12/04/2020",
        description:
          " Th.S BS Ngọc Trinh\n BV Phụ sản Tp.Hồ Chí Minh\n Chuyên khoa Hiếm muộn",
      },
      { title: " " },
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <Timeline
          style={styles.list}
          data={this.data}
          //separator={true}
          circleSize={20}
          circleColor="red"
          lineColor="red"
          rowContainerStyle={{ color: "black" }}
          descriptionStyle={{
            fontSize: 15,
            color: "gray",
            borderWidth: 0.5,
            borderColor: "gray",
            borderRadius: 5,
          }}
          ti
          //separatorStyle={{color:'black'}}
          //timeContainerStyle={{minWidth:52, marginTop: -5}}
          //timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13, overflow: 'hidden'}}
          options={{
            style: { paddingTop: 2 },
          }}
          showTime={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    //paddingTop:30,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    //marginTop:10,
  },
});
