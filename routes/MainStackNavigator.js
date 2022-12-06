<<<<<<< HEAD
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from '../screens/Layout';
import Home from '../screens/Home';

const Nav = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name = "Layout" component={Layout} options={{title: '처음 Layout'}}/>
                <Nav.Screen name = "Home" component={Home} options={{title: '추가 Home'}}/>

            </Nav.Navigator>
        </NavigationContainer>
    );
}

=======
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from '../screens/Layout';
import Home from '../screens/Home';

const Nav = createStackNavigator();

function MainStackNavigator() {
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
export default MainStackNavigator;