import React from "react";
import { Flatlist, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import cars from "../../assets/data/cars";

const HomeMap = () => {
  const getImage = (type) => {
    if (type === "RideX") {
      return require("../../assets/images/top-RideX.png");
    }
    if (type === "RideComfort") {
      return require("../../assets/images/top-RideComfort.png");
    }
    return require("../../assets/images/top-RideXL.png");
  };

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{ latitude: car.latitude, longitude: car.longitude }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
