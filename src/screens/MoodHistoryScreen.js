// src/screens/MoodHistoryScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoodHistoryScreen = () => {
    const [moodHistory, setMoodHistory] = useState([]);

    useEffect(() => {
        const fetchMoodHistory = async () => {
            try {
                const history = await AsyncStorage.getItem('moodHistory');
                setMoodHistory(history ? JSON.parse(history) : []);
            } catch (error) {
                console.error("Error fetching mood history:", error);
            }
        };

        fetchMoodHistory();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.moodItem}>
            <Text style={styles.moodText}>Mood: {item.mood}</Text>
            <Text style={styles.dateText}>Date: {new Date(item.date).toLocaleString()}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mood History</Text>
            {moodHistory.length === 0 ? (
                <Text style={styles.noHistoryText}>No mood entries found.</Text>
            ) : (
                <FlatList
                    data={moodHistory}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            )}
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
    moodItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
    moodText: {
        fontSize: 18,
        color: '#000',
    },
    dateText: {
        fontSize: 14,
        color: '#666',
    },
    noHistoryText: {
        fontSize: 18,
        color: '#999',
        marginTop: 20,
    },
});

export default MoodHistoryScreen;
