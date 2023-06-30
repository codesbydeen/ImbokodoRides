import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import VerficationScreen from "./screens/VerificationScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BiometricsScreen from "./screens/BiometricsScreen";
import RidehistoryScreen from "./screens/RidehistoryScreen";

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding.">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={VerficationScreen}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="Biometrics"
          component={BiometricsScreen}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ridehistory"
          component={RidehistoryScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
