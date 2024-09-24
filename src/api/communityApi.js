// src/api/communityApi.js

import axios from 'axios';

const communityApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getMoodBoards = async () => {
    try {
        const response = await communityApi.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching mood boards:', error);
        throw error;
    }
};

const shareMoodBoard = async (moodBoard) => {
    try {
        // Add a visibility property to the mood board object
        const moodBoardWithVisibility = {
            ...moodBoard,
            visibility: moodBoard.visibility || 'public', // Default to 'public' if no visibility is set
        };

        const response = await communityApi.post('/posts', moodBoardWithVisibility);
        return response.data;
    } catch (error) {
        console.error('Error sharing mood board:', error);
        throw error;
    }
};

export { getMoodBoards, shareMoodBoard };