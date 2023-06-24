import React from "react";
import { View, Pressable, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView>
      <View style={{ backgroundColor: "#BBA6DF", padding: 15 }}>
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
            <Text
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "400",
              }}
            >
              Sandra Dlamini
            </Text>
            <Text style={{ color: "#673AB7" }}>View Profile</Text>
          </View>
        </View>

        {/* Top list */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#919191",
            // BorderTopWidth: 1,
            // borderTopColor: "#919191",
            paddingVertical: 5,
            marginVertical: 10,
          }}
        >
          {/* Wallet */}
          <Pressable
            onPress={() => {
              console.warn("Messages");
            }}
          >
            <Text style={{ color: "black", paddingVertical: 5 }}>Wallet</Text>
          </Pressable>

          {/* Ride History */}
          <Pressable
            onPress={() => {
              console.warn("Messages");
            }}
          >
            <Text style={{ color: "black", paddingVertical: 5 }}>
              Ride History
            </Text>
          </Pressable>

          {/* Settings */}
          <Pressable
            onPress={() => {
              console.warn("Messages");
            }}
          >
            <Text style={{ color: "black", paddingVertical: 5 }}>Settings</Text>
          </Pressable>

          {/* Notifications */}
          <Pressable
            onPress={() => {
              console.warn("Messages");
            }}
          >
            <Text style={{ color: "black", paddingVertical: 5 }}>
              Notifications
            </Text>
          </Pressable>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
