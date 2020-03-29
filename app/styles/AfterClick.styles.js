import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    position: "absolute"
  },

  ok: {
    position: "absolute",
    bottom: "0%",
    marginBottom: "20%",

    right: "25%",

    backgroundColor: "#F0E9E7"
  },
  cancel: {
    position: "absolute",
    right: "53%",
    bottom: "0%",
    marginBottom: "20%",
    backgroundColor: "#EBCA10"
  },

  mappin: {
    position: "absolute",
    right: "46.75%",
    marginBottom: "51.5%",
    bottom: "53%"
  },
  target: {
    position: "absolute",
    marginBottom: "45.75%",
    right: "44%",
    bottom: "0%"
  }
});
