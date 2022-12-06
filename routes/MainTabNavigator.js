<<<<<<< HEAD
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Layout from '../screens/Layout';
import Weather from '../screens/Weather';

const Nav = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name = "Layout" component={Layout} options={{title: '처음 Layout'}}/>
                <Nav.Screen name = "Home" component={Home} options={{title: '추가 Home'}}/>
                <Nav.Screen name = "Weather" component={Weather} options={{title: '날씨조회화면'}}/>

            </Nav.Navigator>
        </NavigationContainer>
    );
}

=======
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Layout from '../screens/Layout';

const Nav = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name = "Layout" component={Layout} options={{title: '처음 Layout'}}/>
                <Nav.Screen name = "Home" component={Home} options={{title: '추가 Home'}}/>

            </Nav.Navigator>
        </NavigationContainer>
    );
}

>>>>>>> c7a2b582df5430928942802b8d070f3162b238ec
export default MainTabNavigator;