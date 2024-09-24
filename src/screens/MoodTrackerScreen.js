// src/screens/MoodTrackerScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShareMoodBoard from '../components/ShareMoodBoard';

const MoodTrackerScreen = ({ navigation }) => {
    const [mood, setMood] = useState('');
    const [moodBoard, setMoodBoard] = useState({});

    const saveMood = async () => {
        if (mood.trim() === '') {
            Alert.alert("Please enter a mood before saving.");
            return;
        }

        try {
            // Retrieve existing moods from AsyncStorage
            const existingMoods = await AsyncStorage.getItem('moodHistory');
            const moodArray = existingMoods ? JSON.parse(existingMoods) : [];

            // Create new mood object with current date
            const newMood = { mood, date: new Date().toISOString() };
            moodArray.push(newMood);

            // Save updated mood array back to AsyncStorage
            await AsyncStorage.setItem('moodHistory', JSON.stringify(moodArray));

            Alert.alert("Mood saved successfully!");
            setMood(''); // Clear input after saving
            setMoodBoard(newMood); // Update moodBoard state
        } catch (error) {
            console.error("Error saving mood:", error);
            Alert.alert("Failed to save mood. Please try again.");
        }
    };

    const handleShare = () => {
        // TO DO: implement share functionality
        console.log("Sharing mood board...");
        navigation.navigate('Community', { moodBoard });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Your Mood</Text>
            <TextInput
                style={styles.input}
                placeholder="How are you feeling today?"
                placeholderTextColor="#888"
                value={mood}
                onChangeText={setMood}
            />
            <Button
                title="Save Mood"
                onPress={saveMood}
                color="#6200ee" // Custom button color
            />
            <View style={styles.spacing} />
            <ShareMoodBoard moodBoard={moodBoard} onShare={handleShare} />
            <View style={styles.spacing} />
            <Button
                title="View Mood History"
                onPress={() => navigation.navigate('MoodHistory')}
                color="#03dac6" // Custom button color
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
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#000',
    },
    spacing: {
        height: 20, // Spacing between buttons
    },
});

export default MoodTrackerScreen;
