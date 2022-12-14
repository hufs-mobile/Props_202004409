import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View, Text } from "react-native";

const Pan = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, 
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, 
        { toValue: { x: 0, y: 0 } } 
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.line}>아래 박스를 마음대로 움직여보세요!</Text>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#5F8D4E",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  line: {
    fontSize: 15,
    color: '#285430',
    paddingBottom: 30
  }
});

export default Pan;