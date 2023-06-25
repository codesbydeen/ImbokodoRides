import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const NewOrderPopUp = () => {
  //Function to decline passenger order
  const onDecline = () => {
    console.warn("Order has been declined");
  };
  const onAccept = () => {
    console.warn("Order has been accepted");
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineB}>
        <Text style={styles.declineText}>Decline</Text>
      </Pressable>
      <Pressable onPress={onAccept} style={styles.popUpContainer}>
        <View style={styles.row}>
          <Text style={styles.rideType}>RideX</Text>
          <View style={styles.userBg}>
            <FontAwesome name="user" size={25} color="#FFFFFF" />
          </View>
          <Text style={styles.rideType}>
            <AntDesign name="star" size={13} color="black" />5
          </Text>
        </View>
        <Text style={styles.minutes}>2 min</Text>
        <Text style={styles.distance}>1 Km</Text>
      </Pressable>
    </View>
  );
};

export default NewOrderPopUp;
