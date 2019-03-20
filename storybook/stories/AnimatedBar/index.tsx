import React, { Component } from "react";
import { Animated } from "react-native";
import { seq } from "../../../components/utils";

type Props = {
  value: number,
  delay: number
};

function randomColor() {
    return `rgb(${seq(3, () => Math.random() * 255).join(',')})`;
}

type State = { color: string };

export default class AnimatedBar extends Component<Props, State> {
  state = {
    color: randomColor()
  };

  _width = new Animated.Value(0);

  componentWillReceiveProps(nextProps: Props) {
    this.animateTo(nextProps.delay, nextProps.value);
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  animateTo = (delay: number, value: number) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.spring(this._width, {
        toValue: value
      })
    ]).start();
  };

  render() {
    const barSytles = {
      backgroundColor: this.state.color,
      width: this._width,
      height: 40,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4
    };

    return <Animated.View style={barSytles} />;
  }
}
