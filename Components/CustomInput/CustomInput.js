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
    container: {},
    input: {},
});

export default CustomInput;