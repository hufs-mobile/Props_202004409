import React from "react";
import { Text, Button, ScrollView, View, StyleSheet, Image, ImageBackground } from "react-native";
import Constants from "expo-constants";

const App = () => {
  return (
    <>
    <View style={{paddingTop: Constants.statusBarHeight}}></View>
    <ScrollView style={[styles.container, styles.playingSpace]}>
      <Text>Hi, I'm writing a text.</Text>
      <Text>Hi, I'm writing a text again.</Text>
      <Text>
        Do you remember
        The 21st night of September?
        Love was changin' the minds of pretenders
        While chasin' the clouds away
        Our hearts were ringin'
        In the key that our souls were singin'
        As we danced in the night, remember
        How the stars stole the night away, oh, yeah
        Hey, hey, hey
        Ba-dee-ya, say, do you remember?
        Ba-dee-ya, dancin' in September
        Ba-dee-ya, never was a cloudy day</Text>
      <Image source = {require('./assets/favicon.png')}/>
      
      <ImageBackground
        style = {{width:300, height:300, resizeMode: 'contain'}}
        source = {{uri: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-226972-GettyImages-74269926.jpg?w=1581&h=1054&crop=1'}}
        >
          <View>
            <Text>September by Earth Fire & Wind</Text>
          </View> 
      </ImageBackground>
      
      {/*<Image source = {{uri: 'http://reactnative.dev/img/tiny_logo.png'}}/>*/}
      
    </ScrollView>
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
          <Button title = "Add square"/>
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
      borderWidth: 3,
    },
    controlSpace: {
      backgroundColor: "F5F5F5",
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    buttonView:{
      backgroundColor: "skyblue",
      width: '47%',
      padding: 5,
      marginLeft: 5,
      margin: 5
    }
  });

  export default App;