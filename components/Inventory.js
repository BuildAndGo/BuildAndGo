import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from './styles';
import { connect } from 'react-redux';
import { fetchTypes } from '../store';


export class Inventory extends React.Component {

 componentDidMount() {

    this.props.fetchTypes()
  }

  render() {
    const inventory = this.props.user.parts;
    const types = this.props.allTypes
    let cache = []
    return (
      <Image source={require('../assets/img/loginbkg.jpg')}
      style={styles.backgroundImage}>
      <Text style={styles.title}>Build and Go!</Text>
      <View style={styles.container}>
      <View style={styles.inventoryContainer}>
        <Text style={styles.inventoryTitle}>Inventory</Text>
        {inventory && inventory.length ?
        inventory.map(item => {
          cache.push(item.typeId)
          return (
          <View key={item.id}>
            <Text style={styles.inventory}>{item.name}</Text>
            <Image source={{uri: inventory.image}} />
          </View>
          )
        })
        : <Text style={styles.inventory}>Start Searching</Text>
        }
        {
          cache.length === types.length ? <Text style={styles.stillNeededTitle}>Car Complete! </Text> :
          <Text style={styles.stillNeededTitle}>Still Needed</Text>
        }
        {types && types.length ?
        types.map(type => {
        if (cache.indexOf(type.id) === -1) {
          return (
            <View key={type.id}>
              <Text style={styles.need}>{type.name}</Text>
              <Image source={{uri: type.image}} />
            </View>
            )
          }
        })
        : <Text>...</Text>
        }
      </View>
      </View>
      </Image>
    );
  }
}

const mapState  = ({ user, allTypes }) => ({ user, allTypes })

export const mapDispatch = { fetchTypes }

export default connect(mapState, mapDispatch)(Inventory)
