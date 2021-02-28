import React from "react";
import { StyleSheet } from "react-native";
import KittensNavigator from "./navigation/KittensNavigator";

export default function App() {
  return <KittensNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
