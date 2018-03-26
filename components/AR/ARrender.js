"use strict";

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import { ViroARScene, Viro3DObject, ViroButton, ViroSceneNavigator } from "react-viro";
// import { connect } from 'react-redux';
// import { updateInventory } from '../../store'

// let tire = require('../../assets/tire.png')
// let red = require('../../assets/red.png')
// let frame = require('../../assets/frame.png')
// let engine = require('../../assets/engine.png')

class ARrender extends Component {
  constructor() {
    super();

    this.state = {
      lclInventory: [],
      // parts: [frame, red, tire, engine],
      found: false
    };

    this._onClick = this._onClick.bind(this);
  }

  _onClick(part) {
    // let array = this.state.parts;
    // let out = array.splice(array.indexOf(part), 1)
    // this.setState({ parts: array, lclInventory: [...this.state.lclInventory, out] })
    updateInventory(this.props.user.id, this.lclInventory)
  }

  render() {
      // console.warn(this.props.currentInventory && this.props.currentInventory.length ? 'broccoli' + this.props.currentInventory : 'cats')
    return (
       <ViroARScene>
      { console.warn(this.props) }
       {
         this.state.lclInventory.length === 4 &&
         Alert.alert(
          'You collected all parts for your car!',
          'See your Inventory',
          [
            { text: 'Keep Looking', style: 'cancel' },
            { text: 'Inventory', onPress: () => this.props.arSceneNavigator.viroAppProps.navigate('CompleteCar') },
          ],
          { cancelable: false }
        )
       }
       </ViroARScene>
    );
  }
}

// const mapState = ({ user, allTypes, currentInventory }) => ({ user, allTypes, currentInventory })
// const mapDispatch = { updateInventory }

// export default connect(mapState, mapDispatch)(ARrender)

module.exports = ARrender
