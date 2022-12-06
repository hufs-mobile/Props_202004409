import React from "react";
import { Text, Button, ScrollView, View, StyleSheet, Image, ImageBackground } from "react-native";
import Constants from "expo-constants";
import { useState } from "react";

const App = () => {

  const flexDirections = ['row', 'rew-reverse', 'column', 'column-reverse'];

  const [flexDirection, setFlexDirection] = useState(0);

  const Square = () => {
    const sqStyle = {
      width: 50,
      height: 50,
      backgroundColor:randomHexColor(),
    };
    return <View style={sqStyle} />;
  };

  const [squares, setSquares] = useState([Square(), Square(), Square()]);

  return (
    <>
    <View style={{paddingTop: Constants.statusBarHeight}}></View>
    <ScrollView style={[styles.container, styles.playingSpace]}>
      { squares.map(elem => elem) }    
      </ScrollView>

    <ScrollView style={[styles.container]}>
      <View style={[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button title = "Change flex Direction"
            onPress={()=>console.log("CHNAGE FLEX DIRECTION")}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Change Justify Content"
            onPress={()=>console.log("CHNAGE JUSTIFY CONTENT")}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Change Align Items"
            onPress={()=>console.log("CHNAGE ALIGN ITEMS")}
          />
        </View>
          <View style={[styles.buttonView]}>
          <Button title = "Change Direction"
            onPress={()=>console.log("CHNAGE DIRECTION")}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Change flex wrap"
            onPress={()=>console.log("CHNAGE FLEX WRAP")}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Add square"
            onPress={()=>setSquares([...squares, Square()])}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Delete Square"
            onPress={()=>setSquares(squares.filter((v,i)=>i !=squares.length-1))}
          />
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

  const randomHexColor = () => {
    return '#000000'.replace(/0/g, () => {
      return (~~(Math.random() * 16)).toString(16);
    });
  };

  export default App;