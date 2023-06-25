import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomContainer: {
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  bottomText: {
    fontSize: 22,
    color: "#4a4a4a",
  },
  roundB: {
    position: "absolute",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 25,
  },
  goB: {
    position: "absolute",
    backgroundColor: "#1495ff",
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    bottom: 110,
    left: Dimensions.get("window").width / 2 - 37,
  },
  goText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  balanceText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  balanceB: {
    position: "absolute",
    backgroundColor: "#000000",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    top: 10,
    left: Dimensions.get("window").width / 2 - 50,
  },
});

export default styles;
