import React from "react";
import { View, Pressable, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView>
      <View style={{ backgroundColor: "#673AB7", padding: 15 }}>
        {/* User row */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#cacaca",
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{ color: "white", fontSize: 24 }}>Sandra Dlamini</Text>
            <Text style={{ color: "lightgrey" }}>5.00*</Text>
          </View>
        </View>

        {/* Messages */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#919191",
            BorderTopWidth: 1,
            borderTopColor: "#919191",
            paddingVertical: 5,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => {
              console.warn("Messages");
            }}
          >
            <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
              Messages
            </Text>
          </Pressable>
        </View>

        {/* Do  more*/}
        <Pressable
          onPress={() => {
            console.warn("Make money driving");
          }}
        >
          <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
            Do more with your account
          </Text>
        </Pressable>

        {/* Make money */}
        <Pressable
          onPress={() => {
            console.warn("Make money driving");
          }}
        >
          <Text style={{ color: "white", paddingVertical: 5 }}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
