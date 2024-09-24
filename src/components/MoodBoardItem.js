// src/components/MoodBoardItem.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoodBoardItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mood Board Title</Text>
            <Text style={styles.body}>This is a mood board</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 16,
        color: '#666',
    },
});

export default MoodBoardItem;