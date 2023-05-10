import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";
import CustomInput from "../Components/CustomInput/CustomInput";
import CustomButton from "../Components/CustomButton/CustomButton";

const LoginScreen = () => {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [passwordConfirm, setPasswordConfirm] = useState(" ");

const onLoginPress = () => {
  console.warn("Login");
}

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style = {styles.title}>Create your Account</Text>
    
    <Text>Username</Text>

    <CustomInput 
    placeholder= "Username" 
    value = {username} 
    setValue={setUsername} 
    />

    <Text>Email</Text>

<CustomInput 
    placeholder= "Email" 
    value = {email} 
    setValue={setEmail} 
    />

    <Text>Password</Text>
    <CustomInput 
    placeholder= "Password"
    value = {password} 
    setValue={setPassword} 
    secureTextEntry
    />

    <Text>Confirm Password</Text>

<CustomInput 
    placeholder= "ConfirmPassword" 
    value = {passwordConfirm} 
    setValue={setPasswordConfirm} 
    secureTextEntry
    />
   
    <CustomButton text = "Create Account" onPress={ onLoginPress}/>

    <Text style ={styles.text}>OR</Text>

    <Text style ={styles.text2}>You already have an account?</Text>


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
    textAlign: "center",
  },

text:{
  fontSize:20,
  fontWeight: "bold",
  textAlign: "center",
  fontColor: "black",

},

text2:{
  textAlign: "center",
  fontColor: "black",
}

});


export default LoginScreen;
