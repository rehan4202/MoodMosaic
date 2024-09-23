import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';

const MoodTrackerScreen = ({ navigation }) => {
    const [mood, setMood] = useState('');
    const [moodLog, setMoodLog] = useState([]);

    const logMood = () => {
        if (mood) {
            setMoodLog([...moodLog, mood]);
            setMood(''); // Clear the input after logging
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Mood Mosaic</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your mood"
                placeholderTextColor="#888"
                value={mood}
                onChangeText={setMood}
                selectionColor="#000"
            />
            <Button title="Log Mood" onPress={logMood} />
            <Button
                title="View Mood History"
                onPress={() => navigation.navigate('MoodHistory', { moodLog })}
            />
            <ScrollView style={styles.logContainer}>
                <Text style={styles.logTitle}>Mood Log:</Text>
                {moodLog.map((item, index) => (
                    <Text key={index} style={styles.logItem}>{item}</Text>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    // your existing styles
});

export default MoodTrackerScreen;
