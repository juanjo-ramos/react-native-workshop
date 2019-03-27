import React from "react";
import RowView, { RowViewProps } from "../RowView";
import { Animated, Easing, StyleProp, ViewStyle } from "react-native";

interface Props extends RowViewProps {
  index: number;
  style?: StyleProp<ViewStyle>;
}

export default class SlidingRowView extends React.PureComponent<Props> {
  // TODO: Think what values makes sense for your animation
  position = new Animated.Value(0);
  opacity = new Animated.Value(1.0);

  componentDidMount() {
    this.animateAddOperation();
  }

  animateAddOperation() {
    // TODO: Create the animation
    // We need 2 animations to run in parallel
    // 1. Translates the X component of the position to 0
    // 2. Transforms the opacity of the Animated.View from 0.5 to 1.0
    // They both should last 50ms and should use one `easing` option
    // Extra kudos if you use `interpolate` for the opacity one    
  }

  animateRemoveOperation(onEnd?: () => void) {
    // TODO: Create the animation
    // 1. We need to run a single animation that moves the position of the row
    // outside the screen.
    // 2. The animations lasts 75ms.
    // 3. onEnd callback is called at the end of the animation
    onEnd && onEnd();
  }

  render() {
    return (
      <Animated.View
        style={[
          this.props.style,
          {
            height: 60,
            opacity: this.opacity,
            transform: [{ translateX: this.position }],
            zIndex: -this.props.index
          }
        ]}
      >
        <RowView {...this.props} />
      </Animated.View>
    );
  }
}
