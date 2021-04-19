import React from "react";
// import { StyleSheet } from "react-native";
import Login from "./user/Login";
import Signup from "./user/Signup";
import SurveyIntro from "./survey/SurveyIntro";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default class extends React.Component {
  render() {
    return <SurveyIntro />;
  }
}
