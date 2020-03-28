import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 20,
    margin: 10,
    fontSize: 18,
    borderRadius: 6,
    textAlignVertical: "top"
  },
  searchSection: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    margin: 10,
    fontSize: 18,
    borderRadius: 6,
    flexDirection: "row",

    backgroundColor: "#fff"
  },
  formView: {
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: /*//"rgba(0,0,0,0.5)"*/ "white"
  },
  formelement: {
    margin: 10,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6
  },
  gpscord: {
    width: "80%",
    margin: 20,

    borderColor: "black",
    borderRadius: 2
  },
  scroll: {
    margin: 20
  },
  buttonSection: {
    width: "90%",
    margin: 10,
    flexDirection: "row"
  }
});
