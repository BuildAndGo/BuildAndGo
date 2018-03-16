import React, { Component } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from "./styles";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Build And Go!</Text>
        <Text>Email: </Text>
        <TextInput
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />

        <Text>Password: </Text>
        <TextInput
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
