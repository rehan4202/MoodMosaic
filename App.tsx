import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen'; // Adjust the path as needed
import MoodTrackerScreen from './src/screens/MoodTrackerScreen'; // Adjust the path as needed
import MoodHistoryScreen from './src/screens/MoodHistoryScreen'; // Import MoodHistoryScreen
import CommunityScreen from './src/screens/CommunityScreen'; // Import CommunityScreen

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
                    component={MoodHistoryScreen} // Add MoodHistoryScreen here
                    options={{ title: 'Mood History' }}
                />
                <Stack.Screen
                    name="Community"
                    component={CommunityScreen} // Add CommunityScreen here
                    options={{ title: 'Community' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;



