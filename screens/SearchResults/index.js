import React from "react";
import { View, Dimensions } from "react-native";
import RouteMap from "../../Components/RouteMap";
import RideTypes from "../../Components/RideTypes";

//send search locations to be displayed on the destination search page
import { useRoute } from "@react-navigation/native";

const SearchResults = () => {
  const route = useRoute();

  console.log(route.params);
  const { originPlace, destinationPlace } = route.params;

  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        {/* Map screen displaying the trip */}
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{ height: 400 }}>
        {/* Show different ride options */}
        <RideTypes />
      </View>
    </View>
  );
};

export default SearchResults;
