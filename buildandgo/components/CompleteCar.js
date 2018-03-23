import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Inventory from "./Inventory";

export default class CompleteCar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You built your car!</Text>
        <Image source={require("../assets/car.png")} />

        <Inventory />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            return this.props.navigation.navigate("Racing");
          }}
        >
          <Text>Start Racing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            return this.props.navigation.navigate("Searching");
          }}
        >
          <Text>Build a New Car</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            return this.props.navigation.navigate("Profile");
          }}
        >
          <Text>See My Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
