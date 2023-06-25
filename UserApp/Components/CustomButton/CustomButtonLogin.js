import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomButtonLogin = () => {
  const nav = useNavigation();

  return (
    <Pressable
      onPress={() => nav.navigate("Verification")}
      style={[styles.container]}
    >
      <Text style={styles.text}>Continue</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#800080",

    width: "75%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});

export default CustomButtonLogin;
