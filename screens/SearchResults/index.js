import React from "react";
import { View, Text } from "react-native";
import HomeMap from "../../Components/HomeMap";
import RideTypes from "../../Components/RideTypes";

const SearchResults = () => {
  return (
    <View>
      {/* Map screen displaying the trip */}
      <HomeMap />

      {/* Show different ride options */}
      <RideTypes />
    </View>
  );
};

export default SearchResults;
