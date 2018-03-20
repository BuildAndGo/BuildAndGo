import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from './styles'
import { connect } from 'react-redux'


class Inventory extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('hi', this.props)
    return (
      <View style={styles.container}>
        <Text>Inventory</Text>
        {this.props.types.length ? <Text>{this.props.types[0]}</Text> : null}
        <Text>Item2</Text>
        <Text>Item3</Text>
        <Text>Item4</Text>
        <Text>Item5</Text>
      </View>
    );
  }
}

 const mapState  = (state) => {
  return {
    types: state.types
  }
}

 const mapDispatch = null;

export default connect(mapState, mapDispatch)(Inventory)
