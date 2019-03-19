import { StyleSheet } from "react-native";

const Colors = {
  backgroundColor: "rgb(25,31,36)"
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  actionsContainer: {
    flexDirection: "row",
    height: 40
  },
  button: {
    flex: 1
  },
  list: {
    flex: 1
  }
});
