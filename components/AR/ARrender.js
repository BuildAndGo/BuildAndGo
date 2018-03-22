"use strict";

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import { ViroARScene, Viro3DObject, ViroButton, ViroSceneNavigator } from "react-viro";

let tire = require('../../assets/tire.png')
let red = require('../../assets/red.png')
let frame = require('../../assets/frame.png')
let engine = require('../../assets/engine.png')

class ARrender extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      parts: [frame, red, tire, engine],
      found: false
    };

    this._onClick = this._onClick.bind(this);

  }

  _onClick(part) {
    //let found = part
    let array = this.state.parts;
    let out = array.splice(array.indexOf(part), 1)
    this.setState({parts: array, inventory: [...this.state.inventory, out] })
  }


  render() {

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

         this.state.inventory.length === 4 &&
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

module.exports = ARrender
