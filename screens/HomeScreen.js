import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Marker, Callout, Circle } from "react-native-maps";
import MapView from "react-native-maps/lib/MapView";

const HomeScreen = () => {
  const [pin, setPin] = React.useState({
    latitude: -26.0152505797,
    longitude: 28.1070868125,
  });
  const [region, setRegion] = React.useState({
    latitude: -26.0152505797,
    longitude: 28.1070868125,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={{ marginTop: 25, flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Drop off Location"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws",
          language: "en",
          // components: "country: South Africa",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -26.0152505797,
          longitude: 28.1070868125,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start", e.nativeEvent.coordinates);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
