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
        const response = await communityApi.post('/posts', moodBoard);
        return response.data;
    } catch (error) {
        console.error('Error sharing mood board:', error);
        throw error;
    }
};

export { getMoodBoards, shareMoodBoard };