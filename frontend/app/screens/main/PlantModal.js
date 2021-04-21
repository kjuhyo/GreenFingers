import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  props,
} from "react-native";
const WIDTH = Dimensions.get("window").width;
const HEIGHT_MODAL = 150;
const PlantModal = (props) => {
  const closeModal = (bool, data) => {
    props.changeModalVisible(bool);
    props.setData(data);
  };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <Text>PLANT MODAL</Text>
        <TouchableOpacity onPress={() => closeModal(false, "OK")}>
          <Text>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => closeModal(false, "Cancel")}>
          <Text>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: HEIGHT_MODAL,
    paddingTop: 10,
    width: WIDTH - 190,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 0.2,
  },
});
export { PlantModal };
