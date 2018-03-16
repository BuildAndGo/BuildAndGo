import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from './styles'

export default class Inventory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Inventory</Text>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
        <Text>Item4</Text>
        <Text>Item5</Text>
      </View>
    );
  }
}
