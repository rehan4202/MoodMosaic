// storage.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'moodBoards';

const storeMoodBoards = async (moodBoards) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(moodBoards));
    } catch (error) {
        console.error(error);
    }
};

const fetchMoodBoardsFromStorage = async () => {
    try {
        const storedMoodBoards = await AsyncStorage.getItem(STORAGE_KEY);
        return storedMoodBoards ? JSON.parse(storedMoodBoards) : [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export { storeMoodBoards, fetchMoodBoardsFromStorage };