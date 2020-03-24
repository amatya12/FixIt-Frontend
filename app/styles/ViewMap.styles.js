import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 2,
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
  gps: {
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 50,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: "#ff0000"
  },
  compass: {
    position: "absolute",
    margin: 16,
    right: 16,

    bottom: 650,
    backgroundColor: "#ffffff"
  },
  latlong: {
    position: "absolute",
    margin: 16,
    right: 100,
    bottom: 20,
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 6
  },

  marker: {
    position: "absolute",

    right: 280,
    bottom: 470
  },
  maptype: {
    position: "absolute",

    right: 40,
    bottom: 570
  },
  FAB: {
    position: "absolute",

    right: 5,
    bottom: 320,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  },
  bottom: {
    position: "absolute",

    left: 10,
    right: 10,
    bottom: 0,
    top: 50,
    padding: 70
  },
  GridViewContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#7B1FA2'
 },
 GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
  }
});
