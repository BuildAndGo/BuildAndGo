"use strict";

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import { ViroARScene, Viro3DObject, ViroButton, ViroSceneNavigator } from "react-viro";
import { connect } from 'react-redux';
import { updateInventory } from '../../store'

let tire = require('../../assets/tire.png')
let red = require('../../assets/red.png')
let frame = require('../../assets/frame.png')
let engine = require('../../assets/engine.png')

class ARrender extends Component {
  constructor() {
    super();

    this.state = {
      lclInventory: [],
      parts: [frame, red, tire, engine],
      found: false
    };

    this._onClick = this._onClick.bind(this);

  }

  _onClick(part) {
    let array = this.state.parts;
    let out = array.splice(array.indexOf(part), 1)
    this.setState({parts: array, lclInventory: [...this.state.lclInventory, out] })
    updateInventory(this.props.user.id, this.lclInventory)
  }

  render() {
      console.warn(this.props.inventory && this.props.inventory.length ? 'broccoli' + this.props.inventory : 'cats')
    return (
       <ViroARScene>

       {/* <Viro3DObject
         source={require("../assets/tire.obj")}
         resources={[require("../assets/tire.mtl")]}
         position={[0.0, 0.0, -10]}
         scale={[0.1, 0.1, 0.1]}
         type="OBJ"
       /> */}

       {
         this.state.parts && this.state.parts.map( (part, i) => {
           let x = Math.floor(Math.random() * 15);
           let y = Math.floor(Math.random() * 4)
           let z = Math.floor(Math.random() * -5)
           return (
             <ViroButton
             key={i}
             source={part}
             position={[x, y, z]}
             height={2}
             width={3}
             onClick={() => this._onClick(part)}
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
            {text: 'Keep Looking', style: 'cancel'},
            {text: 'Inventory', onPress: () => this.props.arSceneNavigator.viroAppProps.navigate('CompleteCar')},
          ],
          { cancelable: false }
        )

       }

       </ViroARScene>

    );
  }
}

const mapState = ({user, inventory}) => ({user, inventory})
const mapDispatch = ({updateInventory})

export default connect(mapState, mapDispatch)(ARrender)

module.exports = ARrender
