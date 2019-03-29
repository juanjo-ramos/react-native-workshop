import React from "react";
import {
  TextInputProps,
  TextInput,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle
} from "react-native";

interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  label: string;
}

export default function(props: Props) {
  const { style: externalStyle, label } = props;

  return (
    <View style={externalStyle}>
      <Text style={style.label}>{label}</Text>
      <TextInput {...props} style={style.textInput} editable={false} />
    </View>
  );
}

const style = StyleSheet.create({
  label: {
    fontWeight: "600",
    color: "white",
    marginBottom: 6
  },
  textInput: {
    backgroundColor: "rgb(255, 215, 192)",
    borderRadius: 5,
    height: 50
  }
});
