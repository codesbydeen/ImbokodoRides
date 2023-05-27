import React from "react";
import { Flatlist, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import cars from '../../assets/data/cars';

const HomeMap = () => {
  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >

      <Flatlist 
      data={cars}
      renderItem={}
      />

      <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
        <Image
          style={{ width: 50, height: 50, resizeMode: "contain" }}
          source={require("../../assets/images/top-RideX.png")}
        />
      </Marker>
    </MapView>
  );
};

export default HomeMap;
