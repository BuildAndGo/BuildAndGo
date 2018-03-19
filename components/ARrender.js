"use strict";

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";

import { ViroARScene, Viro3DObject, ViroButton, ViroSceneNavigator } from "react-viro";

var Inventory = require('./Inventory');
import Footer from './Footer'

export default class ARrender extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      buttonStateTag: ""
    };

    // bind 'this' to functions
    this._onButtonTap = this._onButtonTap.bind(this);
    this._onDrag = this._onDrag.bind(this);
  }
  _onButtonTap() {
    return(
      <ViroSceneNavigator
      initialScene={{scene: Inventory}} />
    )
    //this.props.sceneNavigator.jump("scene2", {scene:Inventory});
  }

  _onDrag(dragToPos, source)  {
    console.log("Dragged to: x" + draggedToPosition[0] + " y:" + draggedToPosition[1] + " z: " + draggedToPosition[2])
}

  render() {
    var buttonSize = 0.25;
    return (

        <ViroARScene>

          {/* <Viro3DObject
            source={require("../assets/tire.obj")}
            resources={[require("../assets/tire.mtl")]}
            position={[0.0, 0.0, -10]}
            scale={[0.1, 0.1, 0.1]}
            type="OBJ"
          /> */}

          <ViroButton
            source={require('../assets/tire.png')}
            position={[1, 3, -5]}
            height={2}
            width={3}
            onClick={this._onButtonTap}
            //onDrag={this._onDrag}
          />


          </ViroARScene>



    );
  }
}

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }

// });

module.exports = ARrender;
