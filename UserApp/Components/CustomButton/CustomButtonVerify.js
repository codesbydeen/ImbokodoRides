import React from "react"
import {View, Text, StyleSheet, Pressable} from "react-native"
import { useNavigation } from "@react-navigation/native";

const CustomButtonVerify = ({onPress, text}) => {
    const nav = useNavigation();

    return(
        <Pressable 
        onPress = {() => nav.navigate("Registration")} 
        style = {[styles.container,
            
        
        
        ]}>

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
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 5,
        
    },
    text: {
        fontWeight: "bold",
        color:"white",
        fontSize: 20,
    },


});

export default CustomButtonVerify;