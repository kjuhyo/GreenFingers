import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Container, Icon, Button, Content } from "native-base";

// import PropTypes from "prop-types";

export function HomeScreen({ navigation }) {
  // state = {
  //   mainName: "Dasol House",
  // };
  // updateState = () => this.setState({ mainName: "update" });
  return (
    <Container style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/mainroom.jpg")}
        style={styles.image}
      >
        <View style={styles.mainicons}>
          <Icon
            type="Ionicons"
            name="notifications-outline"
            style={styles.bell}
          ></Icon>
          <Icon
            type="Ionicons"
            name="options-outline"
            style={styles.option}
          ></Icon>
        </View>
        <View style={styles.mainname}>
          <Text style={styles.nametext}>Dasol House</Text>
          <Icon
            type="Ionicons"
            name="pencil-outline"
            style={styles.pencil}
            onPress={() => {
              console.log("click pencil");
            }}
          ></Icon>
        </View>
        <View style={styles.now}>
          <View style={styles.middlebox}>
            <Icon type="Ionicons" name="sunny-outline"></Icon>
            <Text style={styles.info}>sunny</Text>
            <Icon type="Ionicons" name="water-outline"></Icon>
            <Text style={styles.info}>55%</Text>
            <Icon type="Ionicons" name="thermometer-outline"></Icon>
            <Text style={styles.info}>25°C</Text>
          </View>
        </View>
        <View style={styles.add}>
          <Icon
            type="Ionicons"
            name="add-circle-outline"
            style={styles.addicon}
            onPress={() => {
              console.log("click add icon");
            }}
          ></Icon>
        </View>
        <View style={styles.rooms}>
          <Text
            style={styles.roomname}
            onPress={() => {
              console.log("click room name");
            }}
          >
            거실
          </Text>
          <View style={styles.abovecard}>
            <TouchableOpacity
              style={styles.plantcard}
              onPress={() => {
                console.log("click left");
              }}
            >
              <Image
                source={require("../../assets/images/plant.jpg")}
                style={styles.plantimg}
              />
              <View style={styles.plantinfo}>
                <Text style={styles.plantname}>산세베리아</Text>
                <View style={styles.rightinfo}>
                  <View style={styles.water}>
                    <Text style={styles.watertext}>물 준 날짜</Text>
                    <Text style={styles.waterdate}>2021/02/11</Text>
                  </View>
                  <Image
                    source={require("../../assets/images/plant1.png")}
                    style={styles.planticon}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.plantcard}
              onPress={() => {
                console.log("click right");
              }}
            >
              <Image
                source={require("../../assets/images/plant.jpg")}
                style={styles.plantimg}
              />
              <View style={styles.plantinfo}>
                <Text style={styles.plantname}>산세베리아가</Text>
                <View style={styles.rightinfo}>
                  <View style={styles.water}>
                    <Text style={styles.watertext}>물 준 날짜</Text>
                    <Text style={styles.waterdate}>2021/02/11</Text>
                  </View>
                  <Image
                    source={require("../../assets/images/plant1.png")}
                    style={styles.planticon}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  option: {
    paddingLeft: 10,
    color: "white",
  },
  bell: {
    color: "white",
  },
  mainicons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  mainname: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 20,
  },
  nametext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  pencil: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(255,255,255,0.8)",
    backgroundColor: "rgba(0,0,0,0.05)",
    marginLeft: 10,
    padding: 2,
  },
  now: {
    flex: 0.9,
    alignItems: "center",
  },
  middlebox: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
  rooms: {
    flex: 5,
  },
  info: {
    paddingHorizontal: 15,
    color: "white",
    fontWeight: "bold",
  },
  add: {
    alignItems: "center",
  },
  addicon: {
    color: "rgba(255,255,255,0.6)",
    fontWeight: "bold",
    fontSize: 50,
  },
  roomname: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingTop: 20,
    flex: 0.4,
  },
  abovecard: {
    flex: 4,
    flexDirection: "row",
    paddingHorizontal: 20,
    // padding: 20,
  },
  plantcard: {
    flex: 5,
    margin: 3,
    maxHeight: "40%",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // alignItems: "center",
  },
  plantname: {
    fontWeight: "bold",
    fontSize: 13,
  },
  plantimg: {
    height: 100,
    width: null,
    // marginTop: 10,
    borderRadius: 10,
    // marginHorizontal: 10,
    // alignItems: "center",
  },
  plantinfo: {
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  planticon: {
    height: 30,
    width: 30,
  },
  rightinfo: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  watertext: {
    fontSize: 12,
    fontWeight: "bold",
  },
  waterdate: {
    fontSize: 11,
  },
});
