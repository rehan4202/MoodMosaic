// src/components/ShareMoodBoard.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ShareMoodBoard = ({ moodBoard, onShare }) => {
    return (
        <TouchableOpacity onPress={onShare} style={styles.shareButton}>
            <Text style={styles.shareText}>Share Your Mood Board</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    shareButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    shareText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ShareMoodBoard;