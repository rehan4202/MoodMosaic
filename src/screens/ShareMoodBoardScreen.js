// src/screens/ShareMoodBoardScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { shareMoodBoard } from '../api/communityApi'; // Make sure this import path is correct

const ShareMoodBoardScreen = ({ route, navigation }) => {
    console.log('Route Params:', route.params);
    console.log('Navigation:', navigation);

    const { moodBoard } = route.params || {};
    if (!moodBoard) {
        console.warn('No mood board found in route params');
        return null; // Early return if moodBoard is not available
    }

    const handleShareMoodBoard = async () => {
        try {
            console.log('Attempting to share mood board:', moodBoard);
            const response = await shareMoodBoard(moodBoard);
            console.log('Mood board shared:', response);
            alert('Mood board shared successfully!');
        } catch (error) {
            console.error('Failed to share mood board:', error);
            alert('Error sharing mood board.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Share Your Mood Board</Text>
            <TouchableOpacity onPress={handleShareMoodBoard} style={styles.button}>
                <Text style={styles.buttonText}>Share Mood Board</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    console.log('Go to Community button pressed!');
                    navigation.navigate('Community');
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Go to Community Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    console.log('Share Another Mood Board button pressed!');
                    navigation.navigate('MoodBoardCreation');
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Share Another Mood Board</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ShareMoodBoardScreen;
