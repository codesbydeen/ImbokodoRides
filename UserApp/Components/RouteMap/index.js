import React from "react";
import { Flatlist, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const RouteMap = ({ origin, destination }) => {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: -26.02084,
        longitude: 28.13356,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={"AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws"}
        strokeWidth={5}
        strokeColor="purple"
      />
      <Marker coordinate={originLoc} title={"Origin"} />
      <Marker coordinate={destinationLoc} title={"Destination"} />
    </MapView>
  );
};

export default RouteMap;
