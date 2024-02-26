import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import HamburgerIcon from '../components/HamburgerIcon';

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'lightblue'
        }}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HamburgerIcon />
                    )
                }}
            /> 
        </SafeAreaView>
    )
}

export default Home;
