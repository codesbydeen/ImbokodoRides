import React from "react"
import {View, Text, TextInput, StyleSheet} from "react-native"

const CustomInputProfile = ({value, setValue, placeholder}) => {
    return(
        <View style = {styles.container}>
            <TextInput 
            placeholder = "Full name" 
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


export default CustomInputProfile;