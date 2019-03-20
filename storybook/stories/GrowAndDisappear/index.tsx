import React, { Component } from "react";
import { Animated, TouchableOpacity } from "react-native";

type State = {
  shouldAnimate: boolean;
};

export default class GrowAndDisappear extends Component<{}, State> {
  state = {
    shouldAnimate: false
  };

  _scale = new Animated.Value(1);

  componentDidUpdate() {
    if (this.state.shouldAnimate) {
      this.growAndDisappear();
    }
  }

  growAndDisappear = () => {
    Animated.sequence([
      Animated.timing(this._scale, {
        toValue: 2.5,
        useNativeDriver: true
      }),
      Animated.delay(1000)
    ]).start(() => {
      this._scale.setValue(1);
      this.setState({ shouldAnimate: false });
    });
  };

  resetAnimation = () => this.setState({ shouldAnimate: true });

  render() {
    const opacity = this._scale.interpolate({
      inputRange: [1, 2.5],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={this.resetAnimation}
        activeOpacity={1}
      >
        <Animated.View
          style={{
            position: "relative",
            flex: 1,
            backgroundColor: "#F5FCFF",
            alignItems: "center",
            justifyContent: "center",
            opacity
          }}
        >
          <Animated.Text
            style={{
              backgroundColor: "green",
              position: "absolute",
              fontWeight: "bold",
              color: "white",
              margin: 10,
              fontSize: 24,
              transform: [{ scale: this._scale }]
            }}
          >
            Some Text
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
