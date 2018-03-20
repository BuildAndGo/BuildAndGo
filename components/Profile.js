import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Inventory from "./Inventory";
import styles from "./styles";
import { connect } from 'react-redux'
import { fetchTypes } from '../store/index'

class Profile extends React.Component {
    constructor(props) {
      super(props)
    }

  componentDidMount() {
    this.props.fetchTypes()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Back, Sarah!</Text>

        <Inventory />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Searching")}
        >
          <Text>Start Searching</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate("Racing")}
        >
          <Text>Start Racing</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapState = null
export const mapDispatch = { fetchTypes }

export default connect(mapState, mapDispatch)(Inventory)
