import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#00000099",
  },
  popUpContainer: {
    backgroundColor: "#673AB7",
    borderRadius: 10,
    height: 250,
    alignItems: "center",
    justifyContent: "space-around",
  },
  minutes: {
    color: "lightgrey",
    fontSize: 30,
  },
  distance: {
    color: "lightgrey",
    fontSize: 23,
  },
  rideType: {
    color: "lightgrey",
    fontSize: 20,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  userBg: {
    backgroundColor: "#000000",
    borderRadius: 60,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  declineText: {
    color: "white",
    fontWeight: "bold",
  },
  declineB: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 50,
    width: 100,
    alignItems: "center",
  },
});

export default styles;
