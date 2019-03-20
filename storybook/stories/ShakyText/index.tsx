import React, { Component } from "react";
import { Text, View, Dimensions, Animated, TouchableOpacity } from "react-native";

type Props = {
  error: string;
};

type State = {
  shouldAnimate: boolean;
};

const movementOffset = 2;
const iterations = 3;
const shakeSpeed = 10000;

export default class ShakytText extends Component<Props, State> {
  state = {
    shouldAnimate: false
  };

  _translationX = new Animated.Value(0);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.error) {
      return { shouldAnimate: true };
    }

    return { shouldAnimate: false };
  }

  componentDidUpdate() {
    if (this.state.shouldAnimate) {
      this.shake();
    }
  }

  shake = () => {
    Animated.sequence([
      Animated.loop(
        Animated.sequence([
          Animated.spring(this._translationX, {
            toValue: movementOffset,
            speed: shakeSpeed,
          }),
          Animated.spring(this._translationX, {
            toValue: -movementOffset,
            speed: shakeSpeed,
          })
        ]),
        { iterations }
      ),
      Animated.spring(this._translationX, {
        toValue: 0,
        speed: 10000,
      })
    ]).start();
  };

  restartAnimation = () => this.setState({ shouldAnimate: true })

  render() {
    return (
      <TouchableOpacity
        style={{
          position: "relative",
          flex: 1,
          backgroundColor: "#F5FCFF",
          alignItems: "center",
          justifyContent: "center"
        }}
        onPress={this.restartAnimation}
        activeOpacity={1}
      >
        <Animated.Text
          style={{
            backgroundColor: "green",
            position: "absolute",
            fontWeight: "bold",
            color: "white",
            margin: 10,
            fontSize: 24,
            transform: [{ translateX: this._translationX }]
          }}
        >
          Some Text
        </Animated.Text>
      </TouchableOpacity>
    );
  }
}
