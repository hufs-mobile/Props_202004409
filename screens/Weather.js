import React from "react";
import { Text, Alert, StyleSheet, View, Image } from "react-native";
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {REACT_APP_WEATHER_KEY} from "@env";
import axios from "axios";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail"
    },
    Thunderstorm: {
        iconName: "weather-lightning"
    },
    Drizzle: {
        iconName: "weather-pouring"
    },
    Rain: {
        iconName: "weather-rainy"
    },
    Snow: {
        iconName: "weather-snowy"
    },
    Mist: {
        iconName: "weather-fog"
    },
    Smoke: {
        iconName: "weather-fog"
    },
    Dust: {
        iconName: "weather-fog"
    },
    Fog: {
        iconName: "weather-fog"
    },
    Sand: {
        iconName: "weather-fog"
    },
    Ash: {
        iconName: "weather-fog"
    },
    Squall: {
        iconName: "weather-partly-rainy"
    },
    Tornado: {
        iconName: "weather-tornado"
    },
    Clear: {
        iconName: "weather-sunny"
    },
    Clouds: {
        iconName: "weather-cloudy"
    }
}

export default class Weather extends React.Component {
    state = {
        cond : "Clear"
    }
    getWeather = async (latitude, longitude) => {
        try {
            const {data} = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_WEATHER_KEY}&units=metric`
            );
            console.log(data);
            console.log("temperature : " + data.main.temp);
            console.log("weather : " + data.weather[0].main);
            console.log("icon : " + data.weather[0].icon);

            this.setState({
                    cond : data.weather[0].main, 
                    temp : data.main.temp,
                    icon : data.weather[0].icon
                });
        } catch(error) {
            Alert.alert("Error", error.message)
        }
    };

    getLocation = async () => {
        try {
            //await location
            await Location.requestForegroundPermissionsAsync();
            const location = await Location.getCurrentPositionAsync();
            console.log(location);
            console.log(location.coords.latitude);
            console.log(location.coords.longitude);

            this.getWeather(location.coords.latitude, location.coords.longitude);
        } catch (error) {
            Alert.alert("error", {error})
        }
    };

    componentDidMount() {
        this.getLocation();
    }

    render () {
        const {cond, temp, icon} = this.state;

        return (
            <View style={[styles.container]}>
                <View style={[styles.halfcontainer]}>
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={128} color="#5F8D4E" />
                    <Text style={[styles.temptitle]}> {temp}ºC </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfcontainer: {
        flex: 1,
        justifyContent : "center",
        alignItems: "center"
    },
    temptitle: {
        fontSize: 24,
        color: "#5F8D4E"
    }
});
