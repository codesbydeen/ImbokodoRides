import React from "react";
import HomeScreen from "../screens/HomeScreen";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import OnboardingScreen from "../screens/OnboardingScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding."
      options={{ headerShown: false }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Home"}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"DestinationSearch"}
        component={DestinationSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"SearchResults"}
        component={SearchResults}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
