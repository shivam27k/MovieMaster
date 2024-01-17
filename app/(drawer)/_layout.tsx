import React from 'react';
import Drawer from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
const Layout = () => {
    return (
        <Drawer
            screenOptions={{
                drawerActiveBackgroundColor: '#00BFFF',
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    marginLeft: -20
                }
            }}
        >
            <Drawer.Screen
                name="home"
                options={{
                    title: 'MovieMaster',

                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="favorites"
                options={{
                    title: 'My Favorites',
                    headerShown: true,
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star-outline" size={size} color={color} />
                    )
                }}
            />
        </Drawer>
    );
};

export default Layout;
