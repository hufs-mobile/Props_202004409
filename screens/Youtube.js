import React from "react";
import { Text, Button, ScrollView, View, StyleSheet, Image, ImageBackground, TextInput } from "react-native";
import { useState, useCallback } from "react";

import YoutubePlayer from "react-native-youtube-iframe";

const YoutubeViewer = (props) => {

    const [playing, setPlaying] = useState(false);
    const [playingVideoId, setPlayingVideoId] = useState("X_1cgHy4M7E");
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
          Alert.alert("video has finished playing!");
        }
      }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
      }, []);

    return(
        <ScrollView>
          <YoutubePlayer
              height={300}
              play={playing}
              videoId={playingVideoId}
              onChangeState={onStateChange}/>
          <Button 
              style={styles.buttonContainer}
              title={playing ? "pause" : "play"} 
              onPress={togglePlaying}/>
          <TextInput
              style={styles.input}
              onChangeText={setPlayingVideoId}
              value={playingVideoId}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    buttonContainer:{
      backgroundColor:'skyblue',
      borderRadius:5,
      padding:10,
      margin:20
    }
  });

export default YoutubeViewer;