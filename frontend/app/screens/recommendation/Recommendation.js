import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";

export function RecommendationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Recommendation Screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </View>
  );
}
