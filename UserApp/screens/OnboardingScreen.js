import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import HomeScreen from "./HomeScreen";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#673AB7" : "#808080";
  return (
    <View
      style={{
        height: 5,
        width: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginRight: 12,
    }}
    {...props}
  >
    <Text style={{ color: "#673AB7" }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate(HomeScreen)}
      onDone={() => navigation.navigate(HomeScreen)}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      bottomBarColor="#ffffff"
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("./assets/onboarding1.png")}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Welcome to Imbokodo Rides!",
          subtitle:
            "Book a ride just like a taxi, to take you wherever you want to go",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("./assets/onboarding2.png")}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Ordering Rides Has Been Made Easy",
          subtitle:
            "Book rides anytime by matching riders with divers within the area",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("./assets/onboarding3.png")}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Order Your Ride Now",
          subtitle:
            "Imbokodo Rides has made booking rides easy, affordable and reliable",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
