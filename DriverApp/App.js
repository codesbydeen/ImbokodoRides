import { StatusBar } from "expo-status-bar";
import { View, PermissionsAndroid, Platform } from "react-native";
import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen/index";

export default function App() {
  //Location Permissions
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Imbokodo Rides App Location Permission",
          message:
            "Imbokodo Rides App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      androidPermission();
    } else {
      // request iOS permissions
      Geolocation.requestAuthorization();
    }
  }, []);
  return (
    <View>
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
  );
}

// Google API: AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws
