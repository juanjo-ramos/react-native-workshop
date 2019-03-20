import React, { Component, ReactElement } from "react";
import { Animated, TouchableOpacity, Text, Platform } from "react-native";

const bannerHeight = 80;
const statusBarHeight = 20;

const initialYCoordinate =
  -bannerHeight -
  Platform.select({
    ios: statusBarHeight,
    android: 0
  });

interface Props {
  children: ReactElement;
}

export default class Banner extends Component<Props> {
  _yPositionBanner = new Animated.Value(initialYCoordinate);

  animate = () => {
    Animated.sequence([
      Animated.spring(this._yPositionBanner, {
        toValue: 0,
        useNativeDriver: true
      }),
      Animated.delay(1000),
      Animated.spring(this._yPositionBanner, {
        toValue: initialYCoordinate,
        useNativeDriver: true
      })
    ]).start();
  };

  render() {
    const { children } = this.props;

    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={1}
        onPress={this.animate}
      >
        <Animated.View
          style={{
            backgroundColor: "green",
            justifyContent: 'center',
            height: bannerHeight,
            transform: [{ translateY: this._yPositionBanner }]
          }}
        >
          {children}
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
