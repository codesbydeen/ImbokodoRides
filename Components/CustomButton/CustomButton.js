import React from "react"
import {View, Text, StyleSheet, Pressable} from "react-native"
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({onPress, text, bgColor, fgColor}) => {
    const nav = useNavigation();

    return(
        <Pressable onPress = {() => nav.navigate("Profile")}
        style = {[styles.container,
            bgColor ? {backgroundColor: bgColor} :{}
        
        
        ]}>

            <Text style = {[
                styles.text,
                fgColor ? {Color: fgColor} : {}
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
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 5,
    },
    text: {
        fontWeight: "bold",
        color:"white",
    },


});

export default CustomButton;