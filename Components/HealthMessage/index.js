import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const HealthMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Please remember to leave with all your belongings
      </Text>
      <Text style={styles.text}>
        At Imbokodo Rides, communication is a priority. To ensure patients are
        able to get to their appointments, we know that it is vital that both
        care coordinators and patients are fully informed of transportation
        details.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default HealthMessage;
