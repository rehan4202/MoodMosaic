import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MoodHistoryScreen = ({ route }) => {
    const { moodLog } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mood History</Text>
            <ScrollView style={styles.logContainer}>
                {moodLog.length > 0 ? (
                    moodLog.map((item, index) => (
                        <Text key={index} style={styles.logItem}>{item}</Text>
                    ))
                ) : (
                    <Text style={styles.noLogs}>No mood logs available.</Text>
                )}
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#000',
    },
    logContainer: {
        width: '100%',
    },
    logItem: {
        fontSize: 16,
        color: '#000',
        marginVertical: 5,
    },
    noLogs: {
        fontSize: 16,
        color: '#888',
    },
});

export default MoodHistoryScreen;
