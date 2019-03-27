import React from "react";
import RowView, { RowViewProps } from "../RowView";
import { Animated, Easing, StyleProp, ViewStyle } from "react-native";

interface Props extends RowViewProps {
  index: number;
  style?: StyleProp<ViewStyle>;
}

const initialPosition = -200;

export default class SlidingRowView extends React.PureComponent<Props> {  
  position = new Animated.Value(initialPosition);
  opacity = new Animated.Value(0.5);

  componentDidMount() {
    this.animateAddOperation();
  }

  animateAddOperation() {
    Animated.parallel([
      Animated.timing(this.position, {
        toValue: 0,
        duration: 75,
        easing: Easing.ease
      }),
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 75,
        easing: Easing.ease
      })
    ]).start();
  }

  animateRemoveOperation(onEnd?: () => void) {
    Animated.timing(this.position, {
      toValue: initialPosition,
      duration: 75,
      easing: Easing.ease
    }).start(onEnd);
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
