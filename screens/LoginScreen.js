import React from "react";
import { View, Text, Button } from "react-native";


function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
      title= "Continue"
      onPress={() => navigation.navigate("Sign Up")}
    />
    </View>
  );

 

};


export default LoginScreen;
