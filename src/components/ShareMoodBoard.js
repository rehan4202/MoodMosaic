// src/components/ShareMoodBoard.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ShareMoodBoard = ({ moodBoard, onShare }) => {
    const [shared, setShared] = useState(false);
    const navigation = useNavigation(); // Initialize navigation

    const handleShare = () => {
        onShare(); // Call the share function passed as a prop
        setShared(true); // Mark as shared
    };

    const goToCommunityFeed = () => {
        navigation.navigate('Community'); // Navigate to the Community feed
    };

    const shareAnotherMoodBoard = () => {
        navigation.navigate('MoodBoardCreation'); // Navigate to create another mood board
    };

    return (
        <View>
            {!shared ? (
                <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
                    <Text style={styles.shareText}>Share Your Mood Board</Text>
                </TouchableOpacity>
            ) : (
                <View>
                    <Text style={styles.successText}>Mood board shared successfully!</Text>
                    <TouchableOpacity style={styles.linkButton} onPress={goToCommunityFeed}>
                        <Text style={styles.linkText}>Go to Community Feed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.linkButton} onPress={shareAnotherMoodBoard}>
                        <Text style={styles.linkText}>Share Another Mood Board</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
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
    successText: {
        color: '#4CAF50',
        fontSize: 18,
        marginVertical: 10,
    },
    linkButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    linkText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ShareMoodBoard;
