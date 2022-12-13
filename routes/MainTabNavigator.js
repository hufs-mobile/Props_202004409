import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Layout from '../screens/Layout';
import Weather from '../screens/Weather';
import YoutubeViewer from '../screens/Youtube';
import Message from '../screens/Message';

const Nav = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name = "Home" component={Home} options={{title: 'Home'}}/>
                <Nav.Screen name = "Layout" component={Layout} options={{title: 'Layout'}}/>
                <Nav.Screen name = "Weather" component={Weather} options={{title: '날씨조회화면'}}/>
                <Nav.Screen name = "Message" component={Message} options={{title: 'Message'}}/>
                <Nav.Screen name = "Youtube" component={YoutubeViewer} options={{title: 'YOUTUBE'}}/>

            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default MainTabNavigator;