/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component, RefObject } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import Button from "../../../components/Button";
import RowView from "../../../components/SlidingRowView";
import styles from "./styles";
import {
  generateUUID,
  removeItemFromArray,
  generateRandomColor,
  seq
} from "../../../components/utils";
import { RowData } from "../../../components/RowView";

function generateRandomDataItem() {
  return {
    uid: generateUUID(),
    title: "Defense",
    time: "02:32",
    subtitle: "ISO - 2 FGA Make",
    color: generateRandomColor()
  };
}

const initalNumberOfElements = 0;
const initialData: RowData[] = seq(
  initalNumberOfElements,
  generateRandomDataItem
);

interface State {
  data: RowData[];
}
interface Props {}

export default class App extends Component<Props, State> {
  state = {
    data: initialData
  };

  storedRefs: RefObject<RowView>[] = [];

  renderItem = ({ item, index }: { item: RowData; index: number }) => {
    this.storedRefs[index] = React.createRef();

    return (
      <RowView
        ref={this.storedRefs[index]}
        style={{ marginBottom: 1 }}
        index={index}
        {...item}
      />
    );
  };

  extractKey(item: RowData) {
    return item.uid;
  }

  getComponentForIndex = (index: number) => {
    return this.storedRefs[index];
  };

  addOne = () => {
    this.setState(curr => ({
      data: [...curr.data, generateRandomDataItem()]
    }));
  };

  removeOne = () => {
    const itemIndex = this.state.data.length - 1;
    const { current: componentInstance } = this.getComponentForIndex(itemIndex);

    if (!componentInstance) {
      return;
    }

    componentInstance.animateRemoveOperation(() => {
      this.setState(() => {
        const dataRemovingIndex = removeItemFromArray(
          itemIndex,
          this.state.data
        );

        return {
          data: dataRemovingIndex
        };
      });
    });
  };

  render() {
    const { data } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.extractKey}
        />
        <View style={styles.actionsContainer}>
          <Button
            style={[styles.button, { marginRight: 1 }]}
            onPress={this.addOne}
          >
            Add one
          </Button>
          <Button style={styles.button} onPress={this.removeOne}>
            Remove one
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
