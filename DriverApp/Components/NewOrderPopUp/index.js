import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const NewOrderPopUp = ({
  newOrder,
  onAccept,
  onDecline,
  duration,
  distance,
}) => {
  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineB}>
        <Text style={styles.declineText}>Decline</Text>
      </Pressable>
      <Pressable onPress={onAccept} style={styles.popUpContainer}>
        <View style={styles.row}>
          <Text style={styles.rideType}>{newOrder.type}</Text>
          <View style={styles.userBg}>
            <FontAwesome name="user" size={25} color="#FFFFFF" />
          </View>
          <Text style={styles.rideType}>
            <AntDesign name="star" size={15} color="black" />
            {newOrder.user.rating}
          </Text>
        </View>
        <Text style={styles.minutes}>{duration} min</Text>
        <Text style={styles.distance}>{distance} Km</Text>
      </Pressable>
    </View>
  );
};

export default NewOrderPopUp;
