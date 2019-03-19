import React from "react";
import RowView, { RowViewProps } from "../RowView";
import { Animated, Easing, StyleProp, ViewStyle } from "react-native";

interface Props extends RowViewProps {
  index: number;
  style?: StyleProp<ViewStyle>;
}

export default class AnimatableRowView extends React.PureComponent<Props> {
  height = new Animated.Value(0);
  scale = new Animated.Value(0);
  position = new Animated.Value(-29);

  opacity = this.position.interpolate({
    inputRange: [-29, 0],
    outputRange: [0, 1],
    extrapolate: "clamp"
  });

  componentDidMount() {
    this.animateAddOperation();
  }

  animateAddOperation() {
    Animated.parallel([
      Animated.timing(this.height, {
        toValue: 58,
        duration: 700,
        easing: Easing.ease
      }),
      Animated.timing(this.position, {
        toValue: 0,
        duration: 200,
        easing: Easing.ease
      })
    ]).start();
  }

  animateRemoveOperation(onEnd?: () => void) {
    Animated.timing(this.height, {
      toValue: 0,
      duration: 200,
      easing: Easing.ease
    }).start(onEnd);
  }

  render() {
    return (
      <Animated.View
        style={[
          this.props.style,
          {
            height: this.height,
            opacity: this.opacity,
            transform: [{ translateY: this.position }],
            zIndex: -this.props.index
          }
        ]}
      >
        <RowView {...this.props} />
      </Animated.View>
    );
  }
}
