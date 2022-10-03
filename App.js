import React from "react";
import { Button, ScrollView, View, StyleSheet } from "react-native";

const App = () => {
  return (
     <>
      <View style={[styles.container, styles.playingSpace]}>

      </View>
      <ScrollView style={[styles.container]}>
        <View style={[styles.controlSpace]}>
         <View style={[styles.buttonView]}>
            <Button title = "Change flex Direction"/>
          </View>
          <View style={[styles.buttonView]}>
            <Button title = "Change Justify Content"/>
          </View>
          <View style={[styles.buttonView]}>
            <Button title = "Change Align Items"/>
          </View>
          <View style={[styles.buttonView]}>
            <Button title = "Change Direction"/>
          </View>
          <View style={[styles.buttonView]}>
            <Button title = "Change flex wrap"/>
          </View>
          <View style={[styles.buttonView]}>
            <Button title = "add square"/>
          </View>
          <View style={[styles.buttonView]}>
            <Button title = "Delete Square"/>
          </View>
        </View>
      </ScrollView>
     </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      height:'50%'
    },
    playingSpace:{
      backgroundColor: "grey",
      borderColor: "blue",
      borderWidth: 3
    },
    controlSpace: {
      backgroundColor: "F5F5F5",
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    buttonView:{
      backgroundColor: "skyblue",
      width: '47%',
      //padding: 10,
      marginLeft: 5,
      margin: 5
    }
  });

  export default App;