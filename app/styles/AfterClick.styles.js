import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  ok: {
    position: "absolute",
    right: "25%",
    bottom: "16.5%",
    backgroundColor: "#F0E9E7"
  },
  cancel: {
    position: "absolute",

    right: "53%",
    bottom: "16.5%",
    backgroundColor: "#EBCA10"
  },
  mappin: {
    position: "absolute",

    right: "46.75%",
    bottom: "53%"
  },
  target: {
    position: "absolute",

    right: "44%",
    bottom: "46.75%"
  }
});
