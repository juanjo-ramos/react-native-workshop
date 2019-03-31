import { Dimensions, Animated } from "react-native";

export interface TransitionStrategy {
  getStyles(animatedProperty: Animated.Value): { [key: string]: any };
  configuredAnimatedValue(): Animated.Value;
  targetValue(): number;
  getName(): string;
}

export const numberOfTransitions = 3;
export enum Transition {
  SlideFromRight,
  SlideFromBottom,
  FallDown,
  SlideFromLeft,
  ScalingDown,
  Flip
}

export const AllTransitions = [
  Transition.SlideFromRight,
  Transition.SlideFromBottom,
  Transition.FallDown,
  Transition.SlideFromLeft,
  Transition.ScalingDown,
  Transition.Flip
];

const screenDimensions = Dimensions.get("window");

class SlideFromRightTransitionStrategy implements TransitionStrategy {
  getName(): string {
    return "Slide from Right";
  }

  targetValue(): number {
    return 0;
  }

  configuredAnimatedValue(): Animated.Value {
    return new Animated.Value(screenDimensions.width);
  }

  getStyles(animatedProperty: Animated.Value): { [key: string]: any } {
    const opacity = animatedProperty.interpolate({
      inputRange: [0, screenDimensions.width],
      outputRange: [1, 0]
    });

    return {
      transform: [{ translateX: animatedProperty }],
      opacity
    };
  }
}

class SlideFromLeftTransitionStrategy implements TransitionStrategy {
  getName(): string {
    return "Slide from Left";
  }

  targetValue(): number {
    return 0;
  }

  configuredAnimatedValue(): Animated.Value {
    return new Animated.Value(-screenDimensions.width);
  }

  getStyles(animatedProperty: Animated.Value): { [key: string]: any } {
    const opacity = animatedProperty.interpolate({
      inputRange: [-screenDimensions.width, 0],
      outputRange: [0, 1]
    });

    return {
      transform: [{ translateX: animatedProperty }],
      opacity
    };
  }
}

class ScalingDownTransitionStrategy implements TransitionStrategy {
  getName(): string {
    return "Scaling";
  }

  targetValue(): number {
    return 1;
  }

  configuredAnimatedValue(): Animated.Value {
    return new Animated.Value(5);
  }

  getStyles(animatedProperty: Animated.Value): { [key: string]: any } {
    const opacity = animatedProperty.interpolate({
      inputRange: [1, 5],
      outputRange: [1, 0]
    });

    return {
      transform: [{ scale: animatedProperty }],
      opacity
    };
  }
}

class FlipTransitionStrategy implements TransitionStrategy {
  getName(): string {
    return "Flip";
  }

  targetValue(): number {
    return 0;
  }

  configuredAnimatedValue(): Animated.Value {
    return new Animated.Value(1);
  }

  getStyles(animatedProperty: Animated.Value): { [key: string]: any } {
    const spin = animatedProperty.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "270deg"]
    });

    return {
      transform: [{ rotateY: spin }]
    };
  }
}

class FallDownTransitionStrategy implements TransitionStrategy {
  getName(): string {
    return "Fall Down";
  }
  targetValue(): number {
    return 1;
  }

  configuredAnimatedValue(): Animated.Value {
    return new Animated.Value(0);
  }

  getStyles(animatedProperty: Animated.Value): { [key: string]: any } {
    return {
      opacity: animatedProperty
    };
  }
}

class SlideFromBottomTransitionStrategy implements TransitionStrategy {
  getName(): string {
    return "Slide from Bottom";
  }

  targetValue(): number {
    return 0;
  }

  configuredAnimatedValue(): Animated.Value {
    return new Animated.Value(screenDimensions.height);
  }

  getStyles(animatedProperty: Animated.Value): { [key: string]: any } {
    const opacity = animatedProperty.interpolate({
      inputRange: [0, screenDimensions.width],
      outputRange: [1, 0]
    });

    return {
      transform: [{ translateY: animatedProperty }],
      opacity
    };
  }
}

export default function getTransitionStrategy(
  transition: Transition
): TransitionStrategy {
  switch (transition) {
    case Transition.FallDown:
      return new FallDownTransitionStrategy();
    case Transition.SlideFromBottom:
      return new SlideFromBottomTransitionStrategy();
    case Transition.SlideFromRight:
      return new SlideFromRightTransitionStrategy();
    case Transition.SlideFromLeft:
      return new SlideFromLeftTransitionStrategy();
    case Transition.ScalingDown:
      return new ScalingDownTransitionStrategy();
    case Transition.Flip:
      return new FlipTransitionStrategy();
  }
}
