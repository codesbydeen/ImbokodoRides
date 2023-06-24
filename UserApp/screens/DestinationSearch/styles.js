import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    height: "100%",
  },
  textInput: {
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 5,
    marginLeft: 20,
  },
  separator: {
    backgroundColor: "#efefef",
    height: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: "#a2a2a2",
    padding: 6,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  circle: {
    width: 5,
    height: 5,
    backgroundColor: "black",
    position: "absolute",
    top: 50,
    left: 10,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 45,
    backgroundColor: "#e0e0e0",
    position: "absolute",
    top: 60,
    left: 12,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: "black",
    position: "absolute",
    top: 110,
    left: 10,
  },
});

export default styles;
