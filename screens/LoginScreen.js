import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";
import CustomInput from "../Components/CustomInput/CustomInput";


const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  

    <CustomInput placeholder= "Username" value = {username} setValue={setUsername} />
    <CustomInput placeholder= "Password" value = {password} setValue={setPassword} secureTextEntry/>
    
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
