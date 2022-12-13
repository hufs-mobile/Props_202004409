import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import { useState } from 'react';

const Message = () => {

  return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Text style={styles.header}>이름을 입력하세요</Text>
                <TextInput placeholder="Username" style={styles.textInput} />
                <View style={styles.btnContainer}>
                    <Button title="Submit" onPress={() => click} />
                </View>

            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 30,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 30,
    marginBottom: 48
  },
  textInput: {
    height: 50,
    borderColor: "#000000",
    borderBottomWidth: 2,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor:'skyblue',
    borderRadius:5,
    padding:5,
    marginLeft: 100,
    marginRight: 100
    
  },
});

  export default Message