import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from './styles'
import { connect } from 'react-redux'
import { fetchTypes } from '../store/index'


class Inventory extends React.Component {

  componentDidMount() {
    this.props.fetchTypes()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Inventory</Text>
        <Text>{this.props.types[0].name}</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
        <Text>Item4</Text>
        <Text>Item5</Text>
      </View>
    );
  }
}

export const mapState  = (state) => {
  return {
    types: state.types
  }
}

export const mapDispatch = { fetchTypes }

export default connect(mapState, mapDispatch)(Inventory)
