import React from "react"
import {View, Text, StyleSheet} from "react-native"
import CustomInput from "../Components/CustomInput/CustomInputLogin"
import CustomButton from "../Components/CustomButton/CustomButtonLogin";

const LoginScreen = () => {
    return(
        <View>
            
            <Text style = {styles.title1}>Login</Text>

        <Text style = {styles.text1}>Welcome back!</Text>
        <Text style = {styles.text2}>Enter in your phone number below:</Text>
            <CustomInput/>

            <CustomButton/>
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
      flex: 1,
      backgroundColor: "#ffffff"
    },
    title1:{
      fontSize: 30,
      fontWeight: "bold",
      fontColor: "#051C60",
      margin : 10,
      textAlign: "center",
    },

    text1:{
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        margin: 10,
    },

    text2: {
        textAlign: "center",
        margin: 5,
    }






});



export default LoginScreen;