import React from "react";
import { Flatlist, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import cars from "../../assets/data/cars";

const HomeMap = () => {
  const getImage = (type) => {
    if (type === "LadyRide") {
      return require("../../assets/images/top-LadyRide.png");
    }
    if (type === "GentlemanRide") {
      return require("../../assets/images/top-GentlemanRide.png");
    }
    return require("../../assets/images/top-RideXL.png");
  };

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: -26.02146,
        longitude: 28.1334,
        latitudeDelta: 0.022,
        longitudeDelta: 0.0221,
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
