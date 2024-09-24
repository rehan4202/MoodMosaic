// MoodBoardDisplayScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { fetchMoodBoardsFromStorage } from './storage';

const MoodBoardDisplayScreen = () => {
    const [moodBoards, setMoodBoards] = useState([]);

    useEffect(() => {
        const fetchMoodBoards = async () => {
            try {
                const moodBoards = await fetchMoodBoardsFromStorage();
                setMoodBoards(moodBoards);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMoodBoards();
    }, []);

    const renderMoodBoard = ({ item }) => {
        return (
            <View>
                <Image
                    source={item.backgroundImage}
                    resizeMode="cover"
                    style={{ width: 200, height: 200 }}
                />
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <View>
                    {item.colors.map((color) => (
                        <Text key={color}>{color}</Text>
                    ))}
                </View>
            </View>
        );
    };

    return (
        <View>
            <FlatList
                data={moodBoards}
                renderItem={renderMoodBoard}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default MoodBoardDisplayScreen;