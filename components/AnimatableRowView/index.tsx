import React from "react";
import RowView, { RowViewProps } from "../RowView";
import { Animated, Easing, StyleProp, ViewStyle } from "react-native";

interface Props extends RowViewProps {
  index: number;
  style?: StyleProp<ViewStyle>;
}

export default class AnimatableRowView extends React.PureComponent<Props> {
  // TODO: These are the initial values of your animation.
  // You want to change them to whatever makes sense for the animation to look right
  height = new Animated.Value(60);
  position = new Animated.Value(0);

  opacity = this.position.interpolate({
    inputRange: [-29, 0],
    outputRange: [0, 1],
    extrapolate: "clamp"
  });

  componentDidMount() {
    this.animateAddOperation();
  }

  animateAddOperation() {
    // TODO: Create the animation
    // We want two animations running at the same time
    // 1.1 Adjust the height to 60 animatedly
    // 1.2 Animation should last 700ms
    // 2.1. Adjust the Y position to a value of 0 
    // 2.2. With an animation that should last 200ms    
  }

  animateRemoveOperation(onEnd?: () => void) {
    // TODO: Create the animation
    // We want:
    // 1. The height of the row to be 0 at the end of the animation
    // 2. The animation to last 200ms
    // 3. onEnd callback is called at the end of the animation
    onEnd && onEnd();
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
