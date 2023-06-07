import React, { useEffect, useState } from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import styles from "./styles";
import PlaceRow from "./PlaceRow";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = () => {
  // storing both input locations
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      //implement navigation to go to the next page
      console.warn("Redirect to results");
    }
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: "absolute",
              top: 25,
              left: 10,
              right: 10,
            },
            listView: {
              position: "absolute",
              top: 105,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: "AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: "absolute",
              top: 85,
              left: 10,
              right: 10,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: "AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
        {/* Circle near "origin" input */}
        <View style={styles.circle} />

        {/* Line netween dots */}
        <View style={styles.line} />

        {/* Sqaure near "destination" input */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
