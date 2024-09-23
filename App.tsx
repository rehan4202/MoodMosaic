import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MoodTrackerScreen from './src/screens/MoodTrackerScreen';
import MoodHistoryScreen from './src/screens/MoodHistoryScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="MoodTracker" component={MoodTrackerScreen} />
                <Stack.Screen name="MoodHistory" component={MoodHistoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

