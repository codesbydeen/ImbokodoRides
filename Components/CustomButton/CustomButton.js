import React from "react"
import {View, Text, StyleSheet, Pressable} from "react-native"

const CustomButton = ({onPress, text}) => {
    return(
        <Pressable onPress = {onPress} style = {styles.container}>
            <Text style = {styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#800080",
    },
    text: {},


});

export default CustomButton;