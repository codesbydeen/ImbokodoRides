import React from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = (props) => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  };
  return (
    <View>
      {/* Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          {/* clock icon */}
          <AntDesign name="clockcircle" size={16} color={"#535353"} />
          <Text>Now</Text>
          {/* down arrow icon */}
          <SimpleLineIcons name="arrow-down" size={16} color="black" />
        </View>
      </Pressable>

      {/* Last Search Location */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>Mall of Africa</Text>
      </View>

      {/* Home Location */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name="home" size={20} color="#ffffff" />
        </View>
        <Text style={styles.destinationText}>Munyaka Lifestyle Apartments</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
