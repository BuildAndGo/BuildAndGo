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
      parts: [
      {id: 1, type: frame, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6},
      {id: 2, type: red, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6},
      {id: 3, type: tire, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6},
      {id: 4, type: engine, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6}],
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

       {/* <Viro3DObject
         source={require("../assets/tire.obj")}
         resources={[require("../assets/tire.mtl")]}
         position={[0.0, 0.0, -10]}
         scale={[0.1, 0.1, 0.1]}
         type="OBJ"
       /> */}

       {
         this.state.parts && this.state.parts.map( part => {
           return (
             <ViroButton
             key={part.id}
             source={part.type}
             position={[part.x, part.y, part.z]}
             height={2}
             width={3}
             onClick={() => this._onClick(part.type)}
             onDrag={() => {}}
           />
           )
         })
       }

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
