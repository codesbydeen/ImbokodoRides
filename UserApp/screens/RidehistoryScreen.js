import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../Components/CustomInput/CustomInputRidehistory";
import CustomButtonRidehistory from "../Components/CustomButton/CustomButtonRidehistory";

const Ridehistory = () => {
  return (
    <View>

     <CustomButtonRidehistory />

      <Text style={styles.text1}>        My Ride History</Text>

      <CustomInput />
      <CustomInput />
      <CustomInput />
      <CustomInput />
      <CustomInput />
      <CustomInput />

      
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },


  text1: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    margin: 5,
    alignSelf: "flex-start",
  },
});

export default Ridehistory;