import React from "react"
import {View, Text, StyleSheet, Pressable} from "react-native"

const CustomButtonProfile = ({onPress, text}) => {
    return(
        <Pressable onPress = {onPress} 
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
        fontSize: 15,
        
    },


});

export default CustomButtonProfile;