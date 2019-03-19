import React from "react";
import { StyleProp, ViewStyle, TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  children: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        justifyContent: "center",
        padding: 10
    },
    titleText: {
        textAlign: 'center'
    }
})

export default function Button(props: ButtonProps) {
  const { children, style: externalStyle, onPress } = props;

  return (
    <TouchableOpacity
      style={[style.container,
        externalStyle
      ]}
      onPress={onPress}
    >
      <Text style={style.titleText}>{children}</Text>
    </TouchableOpacity>
  );
}
