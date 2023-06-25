import React from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Entypo, AntDesign } from "@expo/vector-icons";
import styles from "./styles.js";

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws";

const HomeScreen = () => {
  return (
    <View>
      <MapView
        style={{ width: "100%", height: Dimensions.get("window").height - 90 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: -26.02084,
          longitude: 28.13356,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
      {styles.roundButton}
      <Pressable onPress={() => console.warn("Hey")}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      <View style={styles.bottomContainer}>
        <AntDesign name="questioncircle" size={24} color="#4a4a4a" />
        <Text style={styles.bottomText}>You are offline</Text>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </View>
    </View>
  );
};

export default HomeScreen;
