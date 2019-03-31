import React from "react";
import { View, Dimensions, Text, SafeAreaView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import TopToBottomRowAnimation from "./TopToBottomRowAnimation";
import LeftToRightRowAnimation from "./LeftToRightRowAnimation";
import LoginScreen from "./Login/LoginScreen";
import ShakyText from "./ShakyText";
import AnimatedBar from "./AnimatedBar";
import { seq } from "../../components/utils";
import GrowAndDisappear from "./GrowAndDisappear";
import Banner from "./Banner";
import GestureCardView from './FlipCreditCard/FlipOnGesture';
import FlipOnTapCardView from './FlipCreditCard/FlipOnTouch';
import LoadingList from './LoadingList';

storiesOf("Row Animation", module)
  .add("Appear from the left", () => <LeftToRightRowAnimation />)
  .add("Appear from the top", () => <TopToBottomRowAnimation />);

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
  ))
  .add("Grow and disappear", () => <GrowAndDisappear />)
  .add("Banner", () => (
    <Banner>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0
        }}
      >
        Some text
      </Text>
    </Banner>
  ))
  .add("Flipping credit card (with gestures)", () => (
    <SafeAreaView>
      <GestureCardView
        scale={0.9}
        creditCardNumber="4111 1111 1111 1111"
        localizedLabels={{
          expiryDate: "MM/YY"
        }}
        visibleFace="front"
      />
    </SafeAreaView>
  )).add("Flipping credit card (flip on tap)", () => (
    <SafeAreaView>
      <FlipOnTapCardView
        scale={0.9}
        creditCardNumber="4111 1111 1111 1111"
        localizedLabels={{
          expiryDate: "MM/YY"
        }}
        visibleFace="front"
      />
    </SafeAreaView>
  )).add("Loading list transitions", () => (
      <LoadingList />
  ));
