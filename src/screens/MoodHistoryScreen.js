// src/screens/MoodHistoryScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoodHistoryScreen = () => {
    const [moodHistory, setMoodHistory] = useState([]);

    useEffect(() => {
        const fetchMoodHistory = async () => {
            try {
                const storedMoods = await AsyncStorage.getItem('moodHistory');
                if (storedMoods) {
                    setMoodHistory(JSON.parse(storedMoods));
                }
            } catch (error) {
                console.error('Failed to load mood history:', error);
            }
        };

        fetchMoodHistory();
    }, []);

    const renderMoodItem = ({ item }) => (
        <View style={styles.moodItem}>
            <Text style={styles.moodText}>{item.mood}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mood History</Text>
            <FlatList
                data={moodHistory}
                renderItem={renderMoodItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    list: {
        paddingBottom: 20,
    },
    moodItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    moodText: {
        fontSize: 18,
        fontWeight: '500',
    },
    dateText: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
});

export default MoodHistoryScreen;
