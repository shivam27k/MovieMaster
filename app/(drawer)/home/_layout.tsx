import { useTheme } from 'tamagui';
import React from 'react';
import { Stack } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';

export const unstable_settings = {
    initialRouteName: 'index'
};

const Layout = () => {
    const theme = useTheme();
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: theme.purple7.get()
                },
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Movie Master',
                    headerLeft: () => <DrawerToggleButton tintColor="#fff" />
                }}
            />
            <Stack.Screen
                name="movie/[id]"
                options={{
                    title: 'Movie Details'
                }}
            />
            <Stack.Screen
                name="tv/[id]"
                options={{
                    title: 'TV Show Details'
                }}
            />
        </Stack>
    );
};

export default Layout;
