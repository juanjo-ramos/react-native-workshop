import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet
} from "react-native";

interface Props {
  onPress: () => void;
  children: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export default function LoginButton(props: Props) {
  const { children: label, style: externalStyle, onPress } = props;

  return (
    <TouchableOpacity style={[style.container, externalStyle]} onPress={onPress}>
      <Text style={style.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    height: 50,
    justifyContent: "center"
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(252, 57, 22)'
  }
});
