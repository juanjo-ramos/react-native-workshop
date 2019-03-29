- [LayoutAnimation](#layoutanimation)
- [Animated](#animated)
  - [Workflow](#workflow)
  - [Update functions](#update-functions)
  - [Combining animations](#combining-animations)
  - [Looping](#looping)
  - [Full Example](#full-example)
- [Reference](#reference)
  
# LayoutAnimation

Automatically animates the next changes in the layout.

Usage:
```js
LayoutAnimation.configureNext(configurationObject)
// changes in the layout here
```

There are existing presets for different effects:
* `LayoutAnimation.easeInEaseOut()`
* `LayoutAnimation.spring()`
* `LayoutAnimation.linear()`

# Animated
## Workflow
1. Create an `Animated.Value` with an initial value
2. Assign the `Animated.Value` to a property of an animatable view
   1. `Animated` provides the following views: `Text`, `View`, `ScrollView`, `Image`
   2. Any component can be made animatable by using `Animated.createAnimatedComponent`. Example: 
        ```js 
        const MyComponent = (props: MyComponentProps) => (
            <View>
                {/* ...*/}
            </View>
        );

        export default Animated.createAnimatedComponent(MyComponent);
        ```
3. Define how the value evolves over time
4. Start the animation

## Update functions
* [`timing()`](https://facebook.github.io/react-native/docs/animated#timing): Animates a value over time using easing functions. Example:
  ```js
    Animated.timing(this.state.fadeAnim, { toValue: 1 })
  ```
* [`spring()`](https://facebook.github.io/react-native/docs/animated#spring): Animates a value according to an analytical spring model based on damped harmonic oscillation. Example:
  ```js
  Animated.spring(this.state.fadeAnim, {
      // These are the default values
      friction: 7,
      tension: 40,
      spped: 12,
      bounciness: 8
  })
  ```
* [`decay()`](): Animates a value from an initial velocity to zero based on a decay coefficient. Example:
  ```js
  Animated.decay(this.state.position, {
      velocity: 10,
      deceleratio: 0.997
  })
  ```

## Combining animations
* `sequence(animation1, animation2, ...)`: Starts an array of animations in order, waiting for each to complete before starting the next.
* `parallel(animation1, animation2, ...)`: Starts an array of animations all at the same time.
* `stagger(animation1, animation2, ...)`: Array of animations may run in parallel, but are started in sequence with successive delays.
* `interpolate()`: Allows input ranges to map to different output ranges. Example:
  ```js
    // Creates another Animated.Value that changes along with
    // this.opacity but mapping the opacity values to the range
    // of [0, 360]
    const rotation = this.opacity.interpolate({
        inputValues: [0, 1],
        outputValues: [0, 360],
    })
  ```

## Looping
* [`loop(animation, config)`](https://facebook.github.io/react-native/docs/animated#loop): Loops a given animation continously, so that each time it reaches the end, it resets and begins again from the start. Example:
  ```js
  Animated.loop(
      Animated.sequence([
          Animated.timing(/* ... */ ),
          Animated.timing(/* ... */ ),
          Animated.decay(/* ... */ ),
      ]),
      { iterations: -1 } // Infinite
    )

## Full Example

Example:
```js
export default class AnimatedBar extends Component<Props, State> {
  /** ... */
  
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
```

# Reference
* [Animated Reference](https://facebook.github.io/react-native/docs/animated)
* [React Native Animations](https://facebook.github.io/react-native/docs/animations)
* [React Native Training - React Native Animations using the Animated API](https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae)