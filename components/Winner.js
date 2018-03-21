import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from './astyles'

export default class Winner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Winner Page</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Text>Go to Profile</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
