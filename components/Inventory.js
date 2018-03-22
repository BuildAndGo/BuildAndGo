import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from './styles'
import { connect } from 'react-redux'
// import { fetchCurrentInventory } from '../store'


export default class Inventory extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

//  componentDidMount() {
    // this.props.fetchCurrentInventory(this.props.user.id)
    // console.log(this.props)
//   }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>Inventory</Text>
        {/* {this.props.types && this.props.types.length ? <Image source={{uri: this.props.types[0].image}} style={{width: 200, height: 200}} /> : <Text>Cats</Text>} */}
        <Text>Item2</Text>
        <Text>Item3</Text>
        <Text>Item4</Text>
        <Text>Item5</Text>
      </View>
    );
  }
}

// const mapState  = ({ user, currentInventory }) => ({ user, currentInventory })

// export const mapDispatch = { fetchCurrentInventory }

// export default connect(mapState, mapDispatch)(Inventory)
