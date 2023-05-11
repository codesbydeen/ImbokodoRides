import React from "react"
import {View, Text, TextInput, StyleSheet} from "react-native"

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style = {styles.container}>
            <TextInput value = {value} onChangeText = {setValue} placeholder="placeholder" style = {styles.input} secureTextEntry = {secureTextEntry}/>
        </View>
    );
};



export default CustomInput2;