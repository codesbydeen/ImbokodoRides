import React, { useState } from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = () => {
  // store entered locations in order to use them later
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={fromText}
          onChangeText={setFromText}
          style={styles.textInput}
          placeholder="From"
        />
        <TextInput
          value={destinationText}
          onChangeText={setDestinationText}
          style={styles.textInput}
          placeholder="Where to?"
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
