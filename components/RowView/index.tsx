import React from "react";
import { View, Text, StyleProp, ViewStyle, Animated } from "react-native";
import { default as rowStyles } from "./style";

export interface RowViewProps extends RowData {
    style?: StyleProp<ViewStyle>;
}

export interface RowData {
  uid: string;
  color: string;
  title: string;
  time: string;
  subtitle: string;
}

export default function RowView(props: RowViewProps) {
  const { title, subtitle, time, style: externalStyle } = props;

  return (
    <Animated.View style={[rowStyles.container, externalStyle]}>
      <View style={rowStyles.timeContainer}>
        <Text style={rowStyles.timeText}>{time}</Text>
      </View>
      <View style={rowStyles.infoContainer}>
        <Text style={rowStyles.titleText}>{title}</Text>
        <Text style={rowStyles.subtitleText}>{subtitle}</Text>
      </View>
      <View style={rowStyles.actionContainer}>
        <Text style={rowStyles.actionItem}>+</Text>
      </View>
    </Animated.View>
  );
}
