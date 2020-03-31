import { StyleSheet, Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");
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
    height: "20%",
    backgroundColor: "#F0E9E7"
  },
  cancel: {
    position: "absolute",
    right: "53%",
    bottom: "0%",
    marginBottom: "20%",
    backgroundColor: "#EBCA10",
    height: "20%"
  },

  mappin: {
    position: "absolute",
    right: width * 0.465,
    marginBottom: height * 0.475,
    bottom: "53%"
  },
  target: {
    position: "absolute",
    right: width * 0.44,
    marginBottom: height * 0.42,
    bottom: "0%"
  }
});
