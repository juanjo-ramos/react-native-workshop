import { StyleSheet } from 'react-native';

const Colors = {
    mainText: "rgb(230,242,255)",
    text: "rgba(230, 242, 255, 0.65)",
    backgroundColor: "rgb(35, 42, 49)"
  };
  
export default StyleSheet.create({
    container: {
      height: 58,
      backgroundColor: Colors.backgroundColor,
      flexDirection: "row",
      paddingRight: 18,
      marginBottom: 1
    },
    timeContainer: {
      paddingHorizontal: 10,
      justifyContent: "center"
    },
    timeText: {
      color: Colors.text,
      fontSize: 10,
      lineHeight: 12,
      letterSpacing: 0
    },
    infoContainer: {
      flex: 1,
      justifyContent: "center"
    },
    titleText: {
      color: Colors.mainText,
      fontWeight: "bold",
      fontSize: 12,
      lineHeight: 12,
      marginBottom: 8
    },
    subtitleText: {
      color: Colors.text,
      lineHeight: 11,
      letterSpacing: 0,
      fontSize: 11
    },
    actionContainer: {
      justifyContent: "center"
    },
    actionItem: {
      color: Colors.text,
      fontSize: 30,
      fontWeight: "100"
    }
  });