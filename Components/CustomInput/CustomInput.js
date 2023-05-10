import React from "react"
import {View, Text, TextInput, StyleSheet} from "react-native"

const CustomInput = () => {
    return(
        <View style = {styles.container}>
            <TextInput placeholder="placeholder" style = {styles.input}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F9FBFC",
        width: "100%",

        borderColor: "e8e8e8",
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        
    },
    input: {},
});

export default CustomInput;