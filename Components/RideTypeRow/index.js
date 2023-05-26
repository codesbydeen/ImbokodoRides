import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const RideTypeRow = (props) => {
  const { type } = props;

  //   Function to get custom picture based on ride option
  const getImage = () => {
    if (type.type === "RideX") {
      return require("../../assets/images/RideX.jpeg");
    }
    if (type.type === "RideComfort") {
      return require("../../assets/images/RideComfort.jpeg");
    }
    return require("../../assets/images/RideXL.jpeg");
  };
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={getImage()} />

      {/* Ride information */}
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name="person" size={16} color="black" />4
        </Text>
        <Text style={styles.time}>10:45AM arrival time</Text>
      </View>

      {/* Display ride price */}
      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={12} color={"#42d742"} />
        <Text style={styles.price}>est. R{type.price}</Text>
      </View>
    </View>
  );
};

export default RideTypeRow;
