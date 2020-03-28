import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: "7%",
    margin: "2%",
    fontSize: 18,
    borderRadius: 6,
    textAlignVertical: "top"
  },
  searchSection: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: "0.0001%",
    margin: "0.4%",
    fontSize: 18,
    borderRadius: 6,
    flexDirection: "row",

    backgroundColor: "#fff"
  },
  formView: {
    margin: "3%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: /*//"rgba(0,0,0,0.5)"*/ "white"
  },
  formelement: {
    margin: "2%",
    paddingLeft: "1%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6
  },
  gpscord: {
    width: "80%",
    margin: "8%",

    borderColor: "black",
    borderRadius: 2
  },
  scroll: {
    margin: "2%"
  },
  buttonSection: {
    width: "90%",
    margin: "1%",
    flexDirection: "row"
  }
});
