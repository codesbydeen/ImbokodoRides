import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButtonBiometrics from "../Components/CustomButton/CustomButtonBiometrics";

const BiometricsScreen = () => {
  return (
    <View>
      <Text style={styles.title1}>Hello Sandra!</Text>

      <Text style={styles.text3}>Use the touch ID below to access your account</Text>
      
      <CustomButtonBiometrics />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
    textAlign: "center",
  },

  text3: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default BiometricsScreen;