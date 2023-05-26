import React from "react";
import { View, Dimensions } from "react-native";
import HomeMap from "../../Components/HomeMap";
import RideTypes from "../../Components/RideTypes";

const SearchResults = () => {
  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        {/* Map screen displaying the trip */}
        <HomeMap />
      </View>

      <View style={{ height: 400 }}>
        {/* Show different ride options */}
        <RideTypes />
      </View>
    </View>
  );
};

export default SearchResults;
