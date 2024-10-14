// src/screens/CommunityScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { fetchMoodBoardsFromStorage, shareMoodBoard } from '../api/communityApi';
import MoodBoardItem from '../components/MoodBoardItem';
import { useNavigation } from '@react-navigation/native';

const CommunityScreen = () => {
    const navigation = useNavigation();
    const [moodBoards, setMoodBoards] = useState([]);
    const [shared, setShared] = useState(false);

    useEffect(() => {
        const fetchMoodBoards = async () => {
            try {
                const moodBoardsData = await fetchMoodBoardsFromStorage();
                setMoodBoards(moodBoardsData);
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
                renderItem={({ item }) => <MoodBoardItem item={item} />} // Ensure item is passed here
                keyExtractor={(item) => item.id.toString()}
            />
            <Button title="Share Your Mood Board" onPress={handleShare} />
            {shared && <Text>Mood board shared successfully!</Text>}
            <Button title="Go to Mood Board Creation" onPress={() => navigation.navigate('MoodBoardCreation')} />
            <Button title="View Community Feed" onPress={() => navigation.navigate('Community')} />
        </View>
    );
};

export default CommunityScreen;
