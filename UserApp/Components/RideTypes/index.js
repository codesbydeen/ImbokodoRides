import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles.js";
import RideTypeRow from "../RideTypeRow/index.js";
import typesData from "../../assets/data/types";

const RideTypes = () => {
  const confirm = () => {
    console.warn("confirm");
  };
  return (
    <View>
      {typesData.map((type) => (
        <RideTypeRow type={type} key={type.id} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: "#673AB7",
          padding: 10,
          margin: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Confirm Ride
        </Text>
      </Pressable>
    </View>
  );
};

export default RideTypes;
