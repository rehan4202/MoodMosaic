import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen'; // Adjust the path as needed
import MoodTrackerScreen from './src/screens/MoodTrackerScreen'; // Adjust the path as needed
import MoodHistoryScreen from './src/screens/MoodHistoryScreen'; // Import MoodHistoryScreen
import CommunityScreen from './src/screens/CommunityScreen'; // Import CommunityScreen
import MoodBoardCreationScreen from './src/screens/MoodBoardCreationScreen'; // Import MoodBoardCreationScreen
import MoodBoardDisplayScreen from './src/screens/MoodBoardDisplayScreen'; // Import MoodBoardDisplayScreen
import ShareMoodBoardScreen from './src/screens/ShareMoodBoardScreen'; // Import ShareMoodBoardScreen

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                    name="MoodTracker"
                    component={MoodTrackerScreen}
                    options={{ title: 'Mood Tracker' }}
                />
                <Stack.Screen
                    name="MoodHistory"
                    component={MoodHistoryScreen}
                    options={{ title: 'Mood History' }}
                />
                <Stack.Screen
                    name="Community"
                    component={CommunityScreen}
                    options={{ title: 'Community' }}
                />
                <Stack.Screen
                    name="MoodBoardCreation"
                    component={MoodBoardCreationScreen}
                    options={{ title: 'Create Mood Board' }}
                />
                <Stack.Screen
                    name="MoodBoardDisplay"
                    component={MoodBoardDisplayScreen}
                    options={{ title: 'Mood Boards' }}
                />
                <Stack.Screen
                    name="ShareMoodBoard"
                    component={ShareMoodBoardScreen} // Add ShareMoodBoardScreen here
                    options={{ title: 'Share Mood Board' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

