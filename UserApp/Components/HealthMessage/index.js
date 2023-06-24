import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const HealthMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tavel safely at an affordable rate</Text>
      <Text style={styles.text}>
        At Imbokodo Rides, communication is a priority. To ensure patients are
        able to get to their appointments, we provide a platform for users to
        request rides.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default HealthMessage;
