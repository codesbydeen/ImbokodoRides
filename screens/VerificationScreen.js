import React from "react"
import {View, Text, StyleSheet} from "react-native"

const VerificationScreen = () => {
    return(
        <View>
            
            <Text style = {styles.title}>Verification</Text>

        <Text style = {styles.text4}>We will send a One Time Password via SMS</Text>
        <Text style = {styles.text5}>We will send a One Time Password via SMS</Text>
       
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
    title2:{
      fontSize: 30,
      fontWeight: "bold",
      fontColor: "#051C60",
      margin : 10,
      textAlign: "center",
    },

    text4:{
        fontSize: 25,
        fontWeight: "600",
        textAlign: "center",
        margin: 5,
    },


    text5: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    }






});



export default VerificationScreen;