import React from "react";
import { Text, Button, ScrollView, View, StyleSheet, Image, ImageBackground } from "react-native";
import Constants from "expo-constants";
import { useState } from "react";

const Layout = (props) => {
    const {navigation} = props;

  const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ];
  const alignItemsArr = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
  const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
  const directions = ['inherit', 'ltr', 'rtl'];

  const [flexDirection, setFlexDirection] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);

  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    flexWrap: wraps[wrap],
  };  

  const changeSetting = (value, options, setterfunction) => {
    var targetValue = 0;
    if (value == options.length - 1) {
      targetValue = 0;    
    } else {
      targetValue = value + 1;
    }
    setterfunction(targetValue);
    console.log(options[targetValue]);
  };

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
    <View style={[styles.container, styles.playingSpace, hookedStyles]}>
      { squares.map(elem => elem) }    
    </View>

    <ScrollView style={[styles.container]}>
      <View style={[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button title = "Change flex Direction"
            onPress={()=> changeSetting(flexDirection, flexDirections, setFlexDirection)}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Change Justify Content"
            onPress={()=>changeSetting(justifyContent, justifyContents, setJustifyContent)}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Change Align Items"
            onPress={()=>changeSetting(alignItems, alignItemsArr, setAlignItems)}
          />
        </View>
          <View style={[styles.buttonView]}>
          <Button title = "Change Direction"
            onPress={()=>changeSetting(direction, directions, setDirection)}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Change Flex Wrap"
            onPress={()=>changeSetting(wrap, wraps, setWrap)}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Add Square"
            onPress={()=>setSquares([...squares, Square()])}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title = "Delete Square"
            onPress={()=>setSquares(squares.filter((v,i)=>i !=squares.length-1))}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="GO TO HOME" 
            onPress={() => navigation.navigate('Home')}/>
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

  export default Layout;