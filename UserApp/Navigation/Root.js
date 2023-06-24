import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home";
import { View, Text } from "react-native";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Text>{props.name}</Text>
  </View>
);

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Help">
          {() => <DummyScreen name={"Help"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Support">
          {() => <DummyScreen name={"Support"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Logout">
          {() => <DummyScreen name={"Logout"} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
