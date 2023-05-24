import React from "react";
import { View } from "react-native";
import HomeMap from "../../Components/HomeMap";
import HealthMessage from "../../Components/HealthMessage";
import HomeSearch from "../../Components/HomeSearch";

const Home = (props) => {
  return (
    <View>
      {/* Map View */}
      <HomeMap />

      {/* Health Message */}
      <HealthMessage />

      {/* Bottom Component */}
      <HomeSearch />
    </View>
  );
};

export default Home;
