import React from 'react'
import {
    HOME_CONTROL,
    PROFILE,
    NOTIFICATION
} from './screenNames'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeControlScreen from '../screens/homeControls';
import NotificationScreen from '../screens/notifications';
import ProfileScreen from '../screens/profiles';

const Tab = createMaterialBottomTabNavigator();

const BottomTabBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={HOME_CONTROL}
                activeColor="#00a46c"
                inactiveColor="#81c784"
                barStyle={{
                    backgroundColor: '#ffffff',
                }}
            >
                <Tab.Screen
                    name={HOME_CONTROL}
                    component={HomeControlScreen}
                    options={{
                        tabBarLabel: 'Trang chủ',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={NOTIFICATION}
                    component={NotificationScreen}
                    options={{
                        tabBarLabel: 'Thông báo',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bell" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={PROFILE}
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Cá nhân',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabBar