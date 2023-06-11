import HomeScreen from "./screens/HomeScreen/index.js";
import { PermissionsAndroid, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
// import Geolocation from "@react-native-community/geolocation";

export default function App() {
  //Location Permissions
  // navigator.geolocation = require("@react-native-community/geolocation");
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

  return <HomeScreen />;
}
//Google API Key: AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws
