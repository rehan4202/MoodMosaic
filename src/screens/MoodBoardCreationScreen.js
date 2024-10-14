// MoodBoardCreationScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TextArea, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ColorPicker from 'react-native-color-picker';
import { storeMoodBoards } from '../storage'; // Import storeMoodBoards function
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const MoodBoardCreationScreen = () => {
    const navigation = useNavigation(); // Initialize navigation
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [colors, setColors] = useState([]);
    const [moodBoardCreated, setMoodBoardCreated] = useState(false);

    const handleTitleChange = (text) => {
        setTitle(text);
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
    };

    const handleBackgroundImageChange = (image) => {
        setBackgroundImage(image);
    };

    const handleColorsChange = (colors) => {
        setColors(colors);
    };

    const createMoodBoard = async () => {
        try {
            // Create a new mood board object
            const moodBoard = {
                title,
                description,
                backgroundImage,
                colors,
            };

            // Store the mood board in storage
            await storeMoodBoards([moodBoard]); // Store the mood board in storage

            // Set the mood board created state to true
            setMoodBoardCreated(true);
            // Navigate to ShareMoodBoardScreen
            navigateToShareMoodBoard(moodBoard);
        } catch (error) {
            console.error(error);
        }
    };

    const navigateToShareMoodBoard = (moodBoard) => {
        navigation.navigate('ShareMoodBoard', { moodBoard });
    };

    const handleCreateMoodBoard = () => {
        createMoodBoard();
    };

    const handleImageUpload = () => {
        ImagePicker.showImagePicker((response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                setBackgroundImage(source);
            }
        });
    };

    const handleColorSelection = (color) => {
        setColors([...colors, color]);
    };

    return (
        <View>
            <Text>Mood Board Creation</Text>
            <TextInput
                placeholder="Title"
                value={title}
                onChangeText={handleTitleChange}
            />
            <TextArea
                placeholder="Description"
                value={description}
                onChangeText={handleDescriptionChange}
            />
            <Image
                source={backgroundImage}
                resizeMode="cover"
                style={{ width: 200, height: 200 }}
            />
            <Button
                title="Select Background Image"
                onPress={handleImageUpload}
            />
            <View>
                <Text>Colors:</Text>
                {colors.map((color) => (
                    <Text key={color}>{color}</Text>
                ))}
                <ColorPicker
                    onColorChange={handleColorSelection}
                />
            </View>
            <Button
                title="Create Mood Board"
                onPress={handleCreateMoodBoard}
            />
            {moodBoardCreated && (
                <Text>Mood board created successfully!</Text>
            )}
        </View>
    );
};

export default MoodBoardCreationScreen;
