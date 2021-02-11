import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Park from './../src/pages/Park/Park';
import Home from './../src/pages/Home/Home';
import Pet from './../src/pages/Pet/Pet';
import Menu from './../src/pages/Menu/Menu';

import CustomTabBar from './CustomTab';

const Tab = createBottomTabNavigator();

export default () => (

    <Tab.Navigator tabBar={props=>< CustomTabBar {...props}/>}>
        
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Pet" component={Pet} />
        <Tab.Screen name="Park" component={Park} />
 

    </Tab.Navigator>

)