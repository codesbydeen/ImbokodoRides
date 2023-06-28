import "react-native-gesture-handler";
import Router from "./Navigation/Root";
import { PermissionsAndroid, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { Amplify } from "aws-amplify";
import awsExports from "./src/aws-exportsorts";
Amplify.configure(awsExports);

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
  const requestLocationPermission = async () => {
    // alert("location function is loading");
    let getForeground = await Location.getForegroundPermissionsAsync();
    if (getForeground.status !== "granted") {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      } else {
        let backgroundPermissions =
          await Location.requestBackgroundPermissionsAsync();
        if (backgroundPermissions.status == "granted") {
          await AsyncStorage.setItem("background_permission", "true");
        }
      }
    }
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      androidPermission();
    } else {
      // request iOS permissions
      requestLocationPermission();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}
//Google API Key: AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws
