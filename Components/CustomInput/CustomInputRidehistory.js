import React from "react"
import {View, Text, TextInput, StyleSheet} from "react-native"

const CustomInputRidehistory = ({ placeholder}) => {
    return(
        <View style = {styles.container}>
            <TextInput 
            placeholder = "Waterfall City                                  R60" 
            style = {styles.input}/>
        </View>
    );
};
 const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "75%",

        borderRadius: 5,
        borderWidth:1,
        paddingHorizontal:10,
        margin: 20,
        alignSelf: "center",
    },
    input: {},
 });


export default CustomInputRidehistory;