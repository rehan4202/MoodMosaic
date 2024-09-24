import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { fetchMoodBoardsFromStorage } from './storage';

const MoodBoardDisplayScreen = () => {
    const [moodBoards, setMoodBoards] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchMoodBoards = async () => {
            try {
                const moodBoards = await fetchMoodBoardsFromStorage();
                setMoodBoards(moodBoards);
            } catch (error) {
                console.error(error);
                setError("Failed to load mood boards");
            } finally {
                setLoading(false);
            }
        };
        fetchMoodBoards();
    }, []);

    const renderMoodBoard = ({ item }) => {
        console.log('Rendering mood board:', item);
        return (
            <View style={styles.moodBoard}>
                <Image
                    source={{ uri: item.backgroundImage }} // Ensure this is wrapped in an object
                    resizeMode="cover"
                    style={styles.image}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
                <View style={styles.colorsContainer}>
                    {item.colors.map((color) => (
                        <Text key={color} style={{ color }}>{color}</Text>
                    ))}
                </View>
            </View>
        );
    };

    if (loading) {
        return <Text>Loading mood boards...</Text>; // Loading message
    }

    if (error) {
        return <Text>{error}</Text>; // Error message
    }

    return (
        <View>
            <FlatList
                data={moodBoards}
                renderItem={renderMoodBoard}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    moodBoard: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    image: {
        width: 200,
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    colorsContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
});

export default MoodBoardDisplayScreen;
