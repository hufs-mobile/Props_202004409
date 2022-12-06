import React from "react";
import { Text, Button, ScrollView, View, StyleSheet, Image, ImageBackground } from "react-native";
import Constants from "expo-constants";
import { useState } from "react";
import MainStackNavigator from "./routes/MainStackNavigator";

const App = () => {
  return <MainStackNavigator/>;
}

  export default App;