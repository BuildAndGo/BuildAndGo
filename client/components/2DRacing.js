import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from './styles'

export default class Racing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is 2D Racing Page</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Winner")}
        >
          <Text>Go to Winner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate("Loser")}
        >
          <Text>Go to Loser</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
