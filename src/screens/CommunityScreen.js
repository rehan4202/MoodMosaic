// src/screens/CommunityScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { getMoodBoards, shareMoodBoard } from '../api/communityApi';
import MoodBoardItem from '../components/MoodBoardItem';
import {fetchMoodBoardsFromStorage} from "../../storage"; // Import MoodBoardItem

const CommunityScreen = () => {
    const [moodBoards, setMoodBoards] = useState([]);
    const [shared, setShared] = useState(false);

    useEffect(() => {
        const fetchMoodBoards = async () => {
            try {
                const moodBoardsData = await fetchMoodBoardsFromStorage();
                console.log('Fetched mood boards:', moodBoards);
                setMoodBoards(moodBoardsData);
                console.log('Mood boards set state:', moodBoards);
            } catch (error) {
                console.error('Error fetching mood boards:', error);
            }
        };
        fetchMoodBoards();
    }, []);

    const handleShare = async () => {
        try {
            await shareMoodBoard({ title: 'New Mood Board', body: 'This is a new mood board' });
            setShared(true);
        } catch (error) {
            console.error('Error sharing mood board:', error);
        }
    };

    return (
        <View>
            <Text>Community Mood Boards</Text>
            <FlatList
                data={moodBoards}
                renderItem={({ item }) => (
                    <MoodBoardItem item={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <Button title="Share Your Mood Board" onPress={handleShare} />
            {shared && <Text>Mood board shared successfully!</Text>}
        </View>
    );
};

export default CommunityScreen;