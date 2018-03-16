import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import {  FormLabel, FormInput } from "react-native-elements";
import { StackNavigator } from "react-navigation";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChangeEmail(value) {
    this.setState({ email: value})
  }

  handleChangePassword(value) {
    this.setState({ password: value})
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={{ paddingVertical: 20 }}>
        <Text style={styles.title}>Build And Go!</Text>
        <FormLabel>Email: </FormLabel>
        <FormInput
          placeholder="email"
          onChangeText={(email) => this.handleChangeEmail(email)}
          value={this.state.password}
        />

        <FormLabel>Password: </FormLabel>
        <FormInput
          placeholder="password"
          onChangeText={(password) => this.handleChangePassword(password)}
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
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    padding: 10,
    top: 450,
    position: "absolute"
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    padding: 10,
    top: 500,
    position: "absolute"
  },
  tagLine: {
    alignItems: "center",
    color: "#FFFFFF",
    opacity: 0.9,
    padding: 10,
    top: 350,
    position: "absolute"
  },
  text: {
    color: "#3f348c",
    fontFamily: "Arial"
  },
  title: {
    fontSize: 30,
    position: "absolute",
    top: 100
  }
});
