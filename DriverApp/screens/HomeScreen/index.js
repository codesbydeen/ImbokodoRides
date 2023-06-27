import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import styles from "./styles.js";
import NewOrderPopUp from "../../Components/NewOrderPopUp/index.js";

const origin = { latitude: -26.02066, longitude: 28.13362 };
const destination = { latitude: -26.02082, longitude: 28.13356 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDZ5FH-agV2WV5I5FdAQkDZ_GcrHQR45Ws";

const HomeScreen = () => {
  //Driver position
  const [myPosition, setMyPosition] = useState(null);
  //switching from online to offline
  const [isOnline, setIsOnline] = useState(false);
  //Ride trip requests or Orders
  const [order, setOrder] = useState(null);
  const [newOrder, setNewOrder] = useState({
    id: "1",
    type: "LadyRide",

    originLatitude: -26.01829,
    originLongitude: 28.13691,

    destLatitude: -26.02066,
    destLongitude: 28.13362,

    user: {
      rating: 4.0,
      name: "Maria",
    },
  });

  const onDecline = () => {
    setNewOrder(null);
  };

  const onAccept = (newOrder) => {
    setOrder(newOrder);
    setNewOrder(null);
  };

  const onGoPress = () => {
    setIsOnline(!isOnline);
  };

  const onUserLocationChange = (event) => {
    setMyPosition(event.nativeEvent.coordinate);
  };

  const onDirectionFound = (event) => {
    // console.log("Direction found: ", event);
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 0.2,
      });
    }
  };

  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: order.destLatitude,
        longitude: order.destLongitude,
      };
    }
    return {
      latitude: order.originLatitude,
      longitude: order.originLongitude,
    };
  };

  const renderBottomTitle = () => {
    if (order && order.pickedUp) {
      return (
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{order.duration ? order.duration.toFixed(1) : "?"} min</Text>
            <View
              style={{
                backgroundColor: "#d41212",
                marginHorizontal: 10,
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <FontAwesome name="user" size={20} color="#FFFFFF" />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : "?"} km</Text>
          </View>
          <Text style={styles.bottomText}>Dropping Off {order.user.name}</Text>
        </View>
      );
    }

    if (order) {
      return (
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{order.duration ? order.duration.toFixed(1) : "?"} min</Text>
            <View
              style={{
                backgroundColor: "#1e9203",
                marginHorizontal: 10,
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <FontAwesome name="user" size={20} color="#FFFFFF" />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : "?"} km</Text>
          </View>
          <Text style={styles.bottomText}>Picking Up {order.user.name}</Text>
        </View>
      );
    }

    if (isOnline) {
      return <Text style={styles.bottomText}>You are online</Text>;
    }
    return <Text style={styles.bottomText}>You are offline</Text>;
  };

  return (
    <View>
      <MapView
        style={{ width: "100%", height: Dimensions.get("window").height - 90 }}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        showsUserLocation={true}
        onUserLocationChange={onUserLocationChange}
        onReady={onDirectionFound}
        initialRegion={{
          latitude: -26.02084,
          longitude: 28.13356,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        {order && (
          <MapViewDirections
            origin={myPosition}
            onReady={onDirectionFound}
            destination={getDestination()}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="purple"
          />
        )}
      </MapView>
      <Pressable
        onPress={() => console.warn("Balance")}
        style={styles.balanceB}
      >
        <Text style={styles.balanceText}>
          <Text style={{ color: "green" }}>R</Text>0.00
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundB, { top: 25, left: 10 }]}
      >
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundB, { bottom: 110, left: 10 }]}
      >
        <MaterialIcons name="my-location" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundB, { bottom: 110, right: 10 }]}
      >
        <FontAwesome5 name="flag-checkered" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable onPress={onGoPress} style={styles.goB}>
        <Text style={styles.goText}>{isOnline ? "END" : "GO"}</Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name="options-outline" size={24} color="#4a4a4a" />
        {renderBottomTitle()}
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </View>

      {/* Pop Up Order */}
      {newOrder && (
        <NewOrderPopUp
          newOrder={newOrder}
          duration={2}
          distance={0.5}
          onDecline={onDecline}
          onAccept={() => onAccept(newOrder)}
        />
      )}
    </View>
  );
};

export default HomeScreen;
