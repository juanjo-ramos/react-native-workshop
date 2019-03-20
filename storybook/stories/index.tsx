import React from "react";
import { View, Dimensions } from "react-native";
import { storiesOf } from "@storybook/react-native";
import TopToBottomRowAnimation from "./TopToBottomRowAnimation";
import LoginScreen from "./Login/LoginScreen";
import ShakyText from "./ShakyText";
import AnimatedBar from "./AnimatedBar";
import { seq } from "../../components/utils";

storiesOf("Row Animation", module).add("Appear from the top", () => (
  <TopToBottomRowAnimation />
));

const dimensions = Dimensions.get("window");

storiesOf("Login Screen", module).add("Login Screen", () => <LoginScreen />);
storiesOf("Simple animations", module)
  .add("Shake text field", () => <ShakyText error="Test" />)
  .add("Animated bar", () => (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {seq(7, () => (
        <AnimatedBar
          key={`${Math.random() * 1000}`}
          value={Math.random() * dimensions.width}
          delay={500}
        />
      ))}
    </View>
  ));
