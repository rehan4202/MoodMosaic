// src/screens/MoodTrackerScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoodTrackerScreen = ({ navigation }) => {
    const [mood, setMood] = useState('');

    const saveMood = async () => {
        if (mood.trim() === '') {
            Alert.alert("Please enter a mood before saving.");
            return;
        }

        try {
            // Get existing moods
            const existingMoods = await AsyncStorage.getItem('moodHistory');
            const moodArray = existingMoods ? JSON.parse(existingMoods) : [];

            // Add new mood
            const newMood = { mood, date: new Date().toISOString() };
            moodArray.push(newMood);

            // Save updated mood array
            await AsyncStorage.setItem('moodHistory', JSON.stringify(moodArray));

            Alert.alert("Mood saved successfully!");
            setMood(''); // Reset the input
        } catch (error) {
            console.error("Error saving mood:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter your mood</Text>
            <TextInput
                style={styles.input}
                placeholder="How are you feeling today?"
                placeholderTextColor="#888"
                value={mood}
                onChangeText={setMood}
            />
            <Button title="Save Mood" onPress={saveMood} />
            <Button
                title="View Mood History"
                onPress={() => navigation.navigate('MoodHistory')}
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
        marginBottom: 20,
        color: '#000',
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
});

export default MoodTrackerScreen;
