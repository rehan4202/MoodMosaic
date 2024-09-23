// src/screens/WelcomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Mood Mosaic</Text>
            <Button
                title="Get Started"
                onPress={() => navigation.navigate('MoodTracker')} // This should navigate to the MoodTrackerScreen
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#000',
    },
});

export default WelcomeScreen;


