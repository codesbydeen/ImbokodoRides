import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";
import CustomInput from "../Components/CustomInput/CustomInput";
import CustomButton from "../Components/CustomButton/CustomButton";

const LoginScreen = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

const onLoginPress = () => {
  console.warn("Login");
}

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style = {styles.title}>Create an Account</Text>

    <CustomInput 
    placeholder= "Username" 
    value = {username} 
    setValue={setUsername} 
    />
    <CustomInput 
    placeholder= "Password" 
    value = {password} 
    setValue={setPassword} 
    secureTextEntry
    />
   
    <CustomButton text = "Login" onPress={ onLoginPress}/>
    </View>
    
  );

};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: "#ffffff"
  },
  title:{
    fontSize: 24,
    fontWeight: "bold",
    fontColor: "#051C60",
    margin : 10,
  }



});


export default LoginScreen;
