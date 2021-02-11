import React from 'react';
import {createStackNavigator,} from '@react-navigation/stack';
import MainTab from './MainTab';
import Activity from './../src/pages/Activity/Activity';
import Menu from './../src/pages/Menu/Menu';

import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator()

export default () =>(
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Menu"
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="Activity" component={Activity} />
           

        </Stack.Navigator>
    </NavigationContainer>
)