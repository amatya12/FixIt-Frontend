import { StyleSheet, Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 2
  },

  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
    // height: height,
    //width: width
  },
  gps: {
    position: "absolute",

    right: "5%",
    bottom: "5%",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: "#ff0000"
  },
  compass: {
    position: "absolute",
    right: "7%",
    bottom: "82%",
    backgroundColor: "#ffffff"
  },

  latlong: {
    position: "absolute",
    margin: 16,
    right: "20%",
    bottom: "2%",
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 6
  },

  marker: {
    position: "absolute",

    right: "70%",
    borderRadius: 20,
    bottom: "75%"
  },
  road: {
    position: "absolute",

    right: "78%",
    borderRadius: 20,
    bottom: "68%"
  },
  roadside: {
    position: "absolute",

    right: "70%",
    borderRadius: 20,
    bottom: "82%"
  },
  SignAndLights: {
    position: "absolute",

    right: "60%",
    borderRadius: 20,

    bottom: "90%"
  },

  FAB: {
    position: "absolute",

    right: "0%",
    borderRadius: 20,

    bottom: "50%"
  },

  bottom: {
    position: "absolute",
    height: "10%",
    width: "100%",
    right: 10,
    bottom: 0,
    top: 50,
    flexDirection: "row"
  },
  buttonitem: {
    flex: 2,
    margin: 1,
    width: "50%"
  }
});
