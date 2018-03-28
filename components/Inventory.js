import React from "react";
import { View, Text, Image} from "react-native";
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
    return (
      <Image source={require('../assets/img/loginbkg.jpg')}
      style={styles.backgroundImage}>
      <Text style={styles.inventoryBGTitle}>Build and Go!</Text>
      <View style={styles.inventoryContainer}>
        <Text style={styles.inventoryTitle}>Inventory</Text>
        {inventory && inventory.length ?
        inventory.map(item => {
          cache.push(item.typeId)
          return (
          <View key={item.id}>
          <Text
          style={styles.inventory}>{item.name}{"\n"}
            <Image
            style={{width: 200, height: 200}}
            source={{uri: item.image}}
            />
          </Text>
          </View>
          )
        })
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
              <Text style={styles.need}>{type.name}{"\n"}
              <Image
              style={{width: 200, height: 200}}
              source={{uri: type.image}}
              />
              </Text>
            </View>
            )
          }
        })
        : <Text>...</Text>
        }
      </View>
      </Image>
    );
  }
}

const mapState  = ({ user, allTypes, currentInventory }) => ({ user, allTypes, currentInventory })

export const mapDispatch = { fetchCurrentInventory }

export default connect(mapState, mapDispatch)(Inventory)
