import React from "react";
import { Animated, FlatList, View, TouchableOpacity, Text } from "react-native";
import getTransitionStrategy, {
  Transition,
  TransitionStrategy,
  AllTransitions
} from "./TransitionStrategy";
import styles from "./styles";

/**
 * Genearates a random string.
 *
 * The generated string has high probabilites of being unique,
 * even though uniqueness is not ensured.
 *
 * It is used to generate a random key so a flat list
 * can differentiate between Views and work its recycling magic.
 *
 * @returns {string} An _unique_ random key
 */
function generateRandomKey(): string {
  return Math.random()
    .toString(36)
    .substring(7);
}

interface LoadingListProps {}
interface LoadingListState {
  items: ItemData[];
  selectedTransition: Transition;
}

interface ItemData {
  key: string;
}

const defaultTransition = Transition.SlideFromRight;
const animationDelay = 150;

/**
 * Returns an array of elements
 *
 * It is used as a building block for objects. This function
 * is very usueful when using in conjunction with `map`.
 *
 * @example
 * sequence(10).map(() => <View key={generateRandomKey()} />)
 *
 * @param {number} numberOfElements The number of elements contained in the array.
 * @returns {string[]} An array of strings.
 */
function sequence(numberOfElements: number): string[] {
  return "a".repeat(numberOfElements).split("");
}

/**
 * React component that renders a list of items, with a transition effect.
 *
 * @export
 * @class LoadingList
 * @extends {React.PureComponent<LoadingListProps, LoadingListState>}
 */
export default class LoadingList extends React.PureComponent<
  LoadingListProps,
  LoadingListState
> {
  state = { items: [], selectedTransition: defaultTransition };
  initialNumberOfItems = 10;

  constructor(props: LoadingListProps) {
    super(props);

    this.transitionStrategy = getTransitionStrategy(defaultTransition);
    this.resetAnimation();

    this.state = {
      items: sequence(this.initialNumberOfItems).map(() => ({
        key: generateRandomKey()
      })),
      selectedTransition: defaultTransition
    };
  }

  animatedProperty: Animated.Value[];
  transitionStrategy: TransitionStrategy;

  componentDidMount() {
    this.resetAnimation();
  }

  /**
   * Run the current animation.
   *
   * @memberof LoadingList
   */
  reload = () => {
    this.resetAnimation();
    this.forceUpdate();
  };

  /**
   * Configures the animation to be run.
   *
   * @memberof LoadingList
   */
  resetAnimation = () => {
    this.resetAnimatedValues();
    this.configureAnimation();
  };

  /**
   * As part of the animation configuration, the animated values are set to their initial values.
   *
   * @memberof LoadingList
   */
  resetAnimatedValues = () => {
    this.animatedProperty = sequence(this.initialNumberOfItems).map(() =>
      this.transitionStrategy.configuredAnimatedValue()
    );
  };

  /**
   * Configures an starts the animation.
   *
   * @memberof LoadingList
   */
  configureAnimation = () => {
    Animated.stagger(
      animationDelay,
      this.animatedProperty.map(value =>
        Animated.spring(value, {
          toValue: this.transitionStrategy.targetValue(),
          useNativeDriver: true
        })
      )
    ).start();
  };

  /**
   * Forces the FlatList to be re-initialized.
   *
   * This method is needed becuase of the view recycling mechanism
   * of the FlatList.
   *
   * @memberof LoadingList
   */
  forceUpdate() {
    const { items } = this.state;

    this.setState(() => ({ items: [] }));

    setTimeout(() => {
      this.setState({ items });
    });
  }

  /**
   * Selects the next transition on the list.
   *
   * @param {Transition} currentTransition
   * @returns
   * @memberof LoadingList
   */
  getNextTransition(currentTransition: Transition) {
    const currentIndex = AllTransitions.findIndex(
      value => value === currentTransition
    );

    const nextIndex = (currentIndex + 1) % AllTransitions.length;
    return AllTransitions[nextIndex];
  }

  showNextTransition = () => {
    const { selectedTransition } = this.state;

    const nextTransition = this.getNextTransition(selectedTransition);
    this.transitionStrategy = getTransitionStrategy(nextTransition);

    this.setState(
      {
        selectedTransition: nextTransition
      },
      () => this.reload()
    );
  };

  keyExtractor(item: ItemData) {
    return item.key;
  }

  renderItem = ({ item, index }: { item: ItemData; index: number }) => {
    if (index < this.initialNumberOfItems) {
      return (
        <Animated.View
          style={[
            styles.box,
            this.transitionStrategy.getStyles(this.animatedProperty[index])
          ]}
          key={item.key}
        />
      );
    }

    return <View style={styles.box} key={item.key} />;
  };

  render() {
    const { items } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.layoutPicker}
            onPress={this.showNextTransition}
          >
            <Text style={styles.layoutPickerText}>
              {this.transitionStrategy.getName()}
            </Text>
            <View style={styles.dropDownArrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reloadButton} onPress={this.reload}>
            <Text style={styles.reloadButtonText}>RELOAD</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.itemsContainer}
          data={items}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
