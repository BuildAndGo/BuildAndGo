import React from "react";
import { View, Text, Image, FlatList, List, ListItem } from "react-native";
import styles from './styles';
import { connect } from 'react-redux';
import { fetchCurrentInventory } from '../store';


export class Inventory extends React.Component {

 componentDidMount() {
    this.props.fetchCurrentInventory(this.props.user.id);
  }

  render() {
    const inventory = this.props.currentInventory;
    const types = this.props.allTypes;
    let cache = []
    inventory.map(item => cache.push(item.typeId))
    return (
      <Image source={require('../assets/img/loginbkg.jpg')}
      style={styles.backgroundImage}>
      <Text style={styles.title}>Build and Go!</Text>
      <View style={styles.container}>
      <View style={styles.inventoryContainer}>
        <Text style={styles.inventoryTitle}>Inventory</Text>
        {inventory && inventory.length ?
        // inventory.map(item => {
          // cache.push(item.typeId)
          //return (
          // <View key={item.id}>
          //   <Text style={styles.inventory}>{item.name}</Text>
          //   <Image style={{width: 100, height: 100}} source={{uri: item.image}} />
          // </View>
          <FlatList data={inventory} keyExtractor={item => item.id} renderItem={({item}) =>
          <View key={item.id}>
            <Text style={styles.inventory}>{item.name}</Text>
            <Image style={{width: 100, height: 100}} source={{uri: item.image}} />
          </View>
          }
          />
        : <Text style={styles.inventory}>Start Searching!</Text>
        }
        {
          cache.length === types.length ? <Text style={styles.stillNeededTitle}>Car Complete! </Text> :
          <Text style={styles.stillNeededTitle}>Still Needed</Text>
        }
        {
        types && types.length ?
        types.map(type => {
        if (cache.indexOf(type.id) === -1) {
          return (
            <View key={type.id}>
              <Text style={styles.need}>{type.name}</Text>
              <Image
              style={{width: 100, height: 100}}
              source={{uri: type.image}}
              />
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

const mapState  = ({ user, allTypes, currentInventory }) => ({ user, allTypes, currentInventory })

export const mapDispatch = { fetchCurrentInventory }

export default connect(mapState, mapDispatch)(Inventory)
