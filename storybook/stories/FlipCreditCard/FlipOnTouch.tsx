import React from "react";
import CardView, { Props as CardViewProps } from "./CardView";
import { Animated, TouchableOpacity } from "react-native";
import style from "./style";

interface Props extends CardViewProps {}

type Face = "front" | "back";

interface State {
  visibleFace: Face;
}

const animationDuration = 200;

export default class FlipCreditCard extends React.PureComponent<Props, State> {
  state = { visibleFace: "front" as Face };
  rotation = new Animated.Value(0);

  nextSide: (face: Face) => Face = face => {
    switch (face) {
      case "front":
        return "back";
      case "back":
        return "front";
    }
  };

  startFlipping = () => {
    Animated.timing(this.rotation, {
      toValue: 1,
      duration: animationDuration / 2,
      useNativeDriver: true
    }).start(() => {
      this.setState(
        prevState => ({
          visibleFace: this.nextSide(prevState.visibleFace)
        }),
        () => this.endFlipping()
      );
    });
  };

  endFlipping = () => {
    Animated.timing(this.rotation, {
      toValue: 0,
      duration: animationDuration / 2,
      useNativeDriver: true
    }).start();
  };

  flipSides = () => {
    this.startFlipping();
  };

  render() {
    const { scale = 1 } = this.props;
    const { visibleFace } = this.state;

    const rotation = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"]
    });

    return (
      <TouchableOpacity onPress={this.flipSides} activeOpacity={1}>
        <Animated.View
          style={[
            style.container,
            { transform: [{ rotateY: rotation }, { scale }] }
          ]}
        >
          <CardView {...this.props} visibleFace={visibleFace} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
