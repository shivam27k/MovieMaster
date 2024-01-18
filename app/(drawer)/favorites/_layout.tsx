import { useTheme } from 'tamagui';
import React from 'react';
import { Stack } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';

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
                    title: 'My Favourites',
                    headerLeft: () => <DrawerToggleButton tintColor="#fff" />
                }}
            />
        </Stack>
    );
};

export default Layout;
``