import React from "react";
import { Text, Button, ScrollView, View, StyleSheet, Image, ImageBackground } from "react-native";
import Constants from "expo-constants";
import { useState } from "react";
import MainStackNavigator from "./routes/MainStackNavigator";
import MainTabNavigator from "./routes/MainTabNavigator";

const App = () => {
  //return <MainStackNavigator/>;
  return <MainTabNavigator/>;
}

  export default App;