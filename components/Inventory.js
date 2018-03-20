import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from './styles'
import { connect } from 'react-redux'
import { fetchTypes } from '../store'


class Inventory extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

 componentDidMount() {
    this.props.fetchTypes()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Inventory</Text>
        {this.props.types && this.props.types.length ? <Image source={{uri: this.props.types[0].image}} style={{width: 200, height: 200}} /> : <Text>Cats</Text>}
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
    types: state.allTypes
  }
}

export const mapDispatch = { fetchTypes }

export default connect(mapState, mapDispatch)(Inventory)
