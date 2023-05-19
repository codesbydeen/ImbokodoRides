import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";

//Google API Key: AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws

const Stack = createNativeStackNavigator();

export default function App() {
  return <HomeScreen />;
}
