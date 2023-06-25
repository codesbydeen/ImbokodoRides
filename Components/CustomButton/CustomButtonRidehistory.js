import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomButtonRidehistory = () => {
  const nav = useNavigation();

  return (
    <Pressable
      onPress={() => nav.navigate("Profile")}
      style={[styles.container]}
    >
      <Text style={styles.text}>Back</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",

    width: "15%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    
  },
});

export default CustomButtonRidehistory;