import React from "react";
import { View, Text, Button, TextInput} from "react-native";
import CustomInput from "../Components/CustomInput/CustomInput";


function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    

      <Button
      title= "Continue"
      onPress={() => navigation.navigate("Sign Up")}
    />

    <CustomInput/>
    </View>
  );

 

};


export default LoginScreen;
