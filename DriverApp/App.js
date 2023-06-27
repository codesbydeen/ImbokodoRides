import { StatusBar } from "expo-status-bar";
import { View, PermissionsAndroid, Platform } from "react-native";
import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen/index";
import * as Location from "expo-location";

export default function App() {
  //Location Permissions
  const androidPermission = async () => {
    try {
      const [location, setLocation] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null);

      useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

      alert("Waiting..");
      if (errorMsg) {
        alert(errorMsg);
      } else if (location) {
        alert(JSON.stringify(location));
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
    <View>
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
  );
}

// Google API: AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws
