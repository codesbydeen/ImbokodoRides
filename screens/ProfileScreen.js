import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import CustomInput from "../Components/CustomInput/CustomInputProfile";
import CustomButton from "../Components/CustomButton/CustomButtonProfile";

const ProfileScreen = () => {
  const [full_name, setFull_name] = useState(" ");
  const [Phone_number, setPhone_number] = useState(" ");
  const [Email_address, setEmail_address] = useState(" ");

  const onSavePress = () => {
    console.warn("Saved");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={styles.title}>Profile</Text>

      <Text> Full name</Text>
      <CustomInput
        placeholder="Full name"
        value={full_name}
        setValue={setFull_name}
      />

      <Text> Phone number</Text>
      <CustomInput
        placeholder="Phone number"
        value={Phone_number}
        setValue={setPhone_number}
      />

      <Text> Email Address</Text>
      <CustomInput
        placeholder="Email address"
        value={Email_address}
        setValue={setEmail_address}
      />

      <CustomButton text="SAVE" onPress={onSavePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontColor: "#051C60",
    margin: 10,
    textAlign: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontColor: "black",
  },
});

export default ProfileScreen;
