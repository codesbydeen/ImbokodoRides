import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const HomeScreen = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [markerCoordinates, setMarkerCoordinates] = useState("");

  const handlePickUpLocationChange = (text) => {
    setPickUpLocation(text);
  };

  const handleDropOffLocationChange = (text) => {
    setDropOffLocation(text);
  };

  const handleSearch = () => {
    // Implement your search logic here
    // You can use the pickUpLocation and dropOffLocation values
    // to fetch location coordinates or perform any other necessary tasks

    // For demonstration purposes, let's assume we receive coordinates
    const coordinates = {
      latitude: 37.78825,
      longitude: -122.4324,
    };

    setMarkerCoordinates(coordinates);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pick-up Location"
          value={pickUpLocation}
          onChangeText={handlePickUpLocationChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Drop-off Location"
          value={dropOffLocation}
          onChangeText={handleDropOffLocationChange}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markerCoordinates && <Marker coordinate={markerCoordinates} />}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  map: {
    flex: 1,
  },
});

export default HomeScreen;
