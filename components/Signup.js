import React, { Component } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from "./astyles";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>

        <Text>First Name: </Text>
        <TextInput
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
        />

        <Text>Last Name: </Text>
        <TextInput
          onChangeText={lastName => this.setState({ lastName })}
          value={this.state.lastName}
        />


        <Text>Email: </Text>
        <TextInput
          onChangeText={password => this.setState({ password })}
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
      </View>
    );
  }
}
