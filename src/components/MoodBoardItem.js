// src/components/MoodBoardItem.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoodBoardItem = ({ item }) => { // Accept item as a prop
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text> {/* Use item.title */}
            <Text style={styles.body}>{item.body}</Text> {/* Use item.body */}
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
