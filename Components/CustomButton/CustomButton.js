import React from "react"
import {View, Text, StyleSheet} from "react-native"

const CustomButton = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Button</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#800080",
    },
    text: {},


});

export default CustomButton;