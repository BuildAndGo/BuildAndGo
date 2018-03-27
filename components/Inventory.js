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
    const types = this.props.allTypes[0];
    return (
      <Image source={require('../assets/img/loginbkg.jpg')} 
      style={styles.backgroundImage}>
      <View style={styles.container}>
      <View style={styles.inventoryContainer}>
        <Text style={styles.inventoryTitle}>Inventory</Text>
        {inventory && inventory.length ?
        inventory.map(item => {
          return (
          <View key={item.id}>
            <Text style={styles.inventory}>{item.name}</Text>
            <Image source={{uri: inventory.image}} />
          </View>
          )
        })
        : <Text>...</Text>
        }
        <Text style={styles.stillNeededTitle}>Still Needed</Text>
      </View>
      </View>
      </Image>
    );
  }
}

const mapState  = ({ user, fetchTypes }) => ({ user, fetchTypes })

export const mapDispatch = { fetchTypes }

export default connect(mapState, mapDispatch)(Inventory)
