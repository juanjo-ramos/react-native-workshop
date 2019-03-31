import { StyleSheet } from "react-native";

export default StyleSheet.create({
  box: {
    backgroundColor: "white",
    height: 70,
    marginBottom: 7
  },
  container: {
    backgroundColor: "rgb(207, 215, 219)",
  },
  header: {
    backgroundColor: "rgb(93, 122, 137)",
    flexDirection: "row",
    padding: 20,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  layoutPicker: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 20,
    padding: 20
  },
  layoutPickerText: {
    color: "#ccc",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1
  },
  reloadButton: {
    backgroundColor: "rgb(255, 188, 0)",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  reloadButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  },
  itemsContainer: {
    paddingHorizontal: 10
  },
  dropDownArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderLeftColor: "transparent",
    borderRightWidth: 6,
    borderRightColor: "transparent",
    borderTopWidth: 6,
    borderTopColor: "#ccc"
  }
});
