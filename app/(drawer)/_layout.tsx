import React from 'react';
import Drawer from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'tamagui';

const Layout = () => {
    const theme = useTheme();

    return (
        <Drawer
            screenOptions={{
                drawerActiveBackgroundColor: theme.purple4.get(),
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    marginLeft: -20
                },
                headerShown: false
            }}
        >
            <Drawer.Screen
                name="home"
                options={{
                    title: 'Movie Master',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="favorites"
                options={{
                    title: 'My Favorites',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star-outline" size={size} color={color} />
                    )
                }}
            />
        </Drawer>
    );
};

export default Layout;
