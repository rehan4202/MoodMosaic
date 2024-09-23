import 'react-native-gesture-handler'; // Ensure this is at the top
import { AppRegistry } from 'react-native';
import App from './App'; // Import your App component
import { name as appName } from './app.json'; // Import the app name

AppRegistry.registerComponent(appName, () => App);

