import React from "react";
import { Dimensions, View } from "react-native";
import HomeMap from "../../Components/HomeMap";
import HealthMessage from "../../Components/HealthMessage";
import HomeSearch from "../../Components/HomeSearch";

const Home = (props) => {
  return (
    <View>
      <View style={{ height: Dimensions.get("window").height - 450 }}>
        {/* Map View */}
        <HomeMap />
      </View>

      {/* Health Message */}
      <HealthMessage />

      {/* Bottom Component */}
      <HomeSearch />
    </View>
  );
};

export default Home;
