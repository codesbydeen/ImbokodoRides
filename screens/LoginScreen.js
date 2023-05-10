import React from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";
import CustomInput from "../Components/CustomInput/CustomInput";


function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  

    <CustomInput/>
    <CustomInput/>
    
    </View>
  );

};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: "#ffffff"
  }
})


export default LoginScreen;
