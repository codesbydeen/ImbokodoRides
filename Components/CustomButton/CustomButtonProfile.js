import React from "react"
import {View, Text, StyleSheet, Pressable} from "react-native"


const CustomButtonProfile = ({onPress, text}) => {
    return(
        <Pressable onPress = {onPress} 

import { useNavigation } from "@react-navigation/native";

const CustomButtonProfile = ({onPress, text}) => {
    const nav = useNavigation();

    return(
        <Pressable onPress = {() => nav.navigate("Ridehistory")} 

        style = {[styles.container,
            
             
        ]}>


            <Text style = {styles.text}>SAVE</Text>
        </Pressable>

            <Text style = {[
                styles.text,
                
            ]}>
                {text}
            </Text>

            
        </Pressable>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#800080",


        width: "75%",

        width: "65%",

        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 5,
        
    },
    text: {
        fontWeight: "bold",
        color:"white",

        fontSize: 15,
        

    },


});

export default CustomButtonProfile;