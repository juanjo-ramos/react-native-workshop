import React from "react";
import CardView, { Props as CardViewProps } from "./CardView";
import {
  Animated,
  TouchableOpacity,
  View,
  PanResponder,
  Dimensions
} from "react-native";
import style from "./style";

interface Props extends CardViewProps {}

type Face = "front" | "back";

interface State {
  visibleFace: Face;
}

const screenWidth = Dimensions.get("window").width;

export default class FlipCreditCard extends React.PureComponent<Props, State> {
  state = { visibleFace: "front" as Face };
  prevX = 0;
  rotation = new Animated.Value(0);
  currentRotation = 0;

  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      // The gesture has started. Show visual feedback so the user knows
      // what is happening!
      // gestureState.d{x,y} will be set to zero now
      this.prevX = 0;
    },
    onPanResponderMove: (evt, gestureState) => {
      // The most recent move distance is gestureState.move{X,Y}
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}
      this.currentRotation = Math.max(
        0,
        Math.min(
          1,
          this.currentRotation + (gestureState.dx - this.prevX) / screenWidth
        )
      );

      this.prevX = gestureState.dx;

      if (this.currentRotation >= 0.5) {
        this.setState({ visibleFace: "back" });
      } else {
        this.setState({ visibleFace: "front" });
      }

      this.rotation.setValue(this.currentRotation);
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      return true;
    },
    onPanResponderEnd: (evt, gestureState) => {
      this.prevX = 0;
      Animated.spring(this.rotation, {
        friction: 4,
        toValue: this.currentRotation >= 0.5 ? 1 : 0
      }).start();
    }
  });

  nextSide: (face: Face) => Face = face => {
    switch (face) {
      case "front":
        return "back";
      case "back":
        return "front";
    }
  };

  render() {
    const { scale = 1 } = this.props;
    const { visibleFace } = this.state;

    const rotation = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"]
    });

    return (
      <View {...this._panResponder.panHandlers}>
        <Animated.View
          style={[
            style.container,
            {
              transform: [
                { rotateY: rotation },
                { scale },
                { perspective: 1000 }
              ]
            }
          ]}
        >
          <CardView {...this.props} visibleFace={visibleFace} />
        </Animated.View>
      </View>
    );
  }
}
