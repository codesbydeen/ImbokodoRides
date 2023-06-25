import React, { useState } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import styles from "./styles.js";
import NewOrderPopUp from "../../Components/NewOrderPopUp/index.js";

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws";

const HomeScreen = () => {
  //switching from online to offline
  const [isOnline, setIsOnline] = useState(false);

  const onGoPress = () => {
    setIsOnline(!isOnline);
  };

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
      <Pressable
        onPress={() => console.warn("Balance")}
        style={styles.balanceB}
      >
        <Text style={styles.balanceText}>
          <Text style={{ color: "green" }}>R</Text>0.00
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundB, { top: 25, left: 10 }]}
      >
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundB, { top: 25, right: 10 }]}
      >
        <FontAwesome name="search" size={20} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundB, { bottom: 110, left: 10 }]}
      >
        <MaterialIcons name="my-location" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundB, { bottom: 110, right: 10 }]}
      >
        <FontAwesome5 name="flag-checkered" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable onPress={onGoPress} style={styles.goB}>
        <Text style={styles.goText}>{isOnline ? "END" : "GO"}</Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name="options-outline" size={24} color="#4a4a4a" />
        {isOnline ? (
          <Text style={styles.bottomText}>You are online</Text>
        ) : (
          <Text style={styles.bottomText}>You are offline</Text>
        )}
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </View>

      {/* Pop Up Order */}
      <NewOrderPopUp />
    </View>
  );
};

export default HomeScreen;
