import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from './styles'
import { connect } from 'react-redux'
 import { fetchCurrentInventory } from '../store'


export class Inventory extends React.Component {
 componentDidMount() {
    this.props.fetchCurrentInventory(this.props.user.id)
  }

  render() {
    const inventory = this.props.currentInventory;
    return (
      <View style={styles.container}>
        <Text>Inventory</Text>
        {inventory && inventory.length ?
        inventory.map(item => {
          return (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Image source={{uri: inventory.image}} />
          </View>
          )
        })
        : <Text>...</Text>
        }
      </View>
    );
  }
}

const mapState  = ({ user, currentInventory }) => ({ user, currentInventory })

export const mapDispatch = { fetchCurrentInventory }

export default connect(mapState, mapDispatch)(Inventory)
