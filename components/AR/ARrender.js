"use strict";

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import { ViroARScene, ViroVideo, ViroButton, ViroSceneNavigator } from "react-viro";
import { connect } from 'react-redux';

let tire = require('../../assets/tire.png')
let red = require('../../assets/red.png')
let frame = require('../../assets/frame.png')
let engine = require('../../assets/engine.png')

class ARrender extends Component {
  constructor() {
    super();

    this.state = {
      lclInventory: [],
      video: null,
      stopAlert: null,
      parts: [
      {id: 1, type: frame, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6},
      {id: 2, type: red, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6},
      {id: 3, type: tire, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6},
      {id: 4, type: engine, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6}],
      found: false
    };

    this._onClick = this._onClick.bind(this)
    this._randomResult = this._randomResult.bind(this)
    this._resultAlert = this._resultAlert.bind(this)

  }

  _onClick(part) {
    let array = this.state.parts;
    let out = array.splice(array.indexOf(part), 1)
    this.setState({parts: array, lclInventory: [...this.state.lclInventory, out] })
  }

  _randomResult() {
    var truthyOrFalsy = Math.floor((Math.random() * 2));
    if(truthyOrFalsy) return this.props.arSceneNavigator.viroAppProps.navigate("Winner")
    else return this.props.arSceneNavigator.viroAppProps.navigate("Loser")
  }

  _resultAlert(){

    Alert.alert(
      'You finished the racing!',
      'See the result!',
      [
        {text: 'cancel', style: 'cancel'},
        {text: 'Who\'s Winner?', onPress: this._randomResult},
      ],
      { cancelable: false }
    )
  }

  render() {

    return (
       <ViroARScene>

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
         this.state.lclInventory.length === 1 &&
         this.state.stopAlert === null &&
         Alert.alert(
          'You collected all parts for your car!',
          'See your Inventory',
          [
            {text: 'Keep Looking', style: 'cancel'},
            {text: 'Start Racing', onPress: () =>  this.setState({ video: true, stopAlert: true })},
          ],
          { cancelable: false }
        )
       }


       {
         this.state.video &&
         <ViroVideo
         source={require("../../assets/racing.mp4")}
         onFinish={ () => {
                  this._resultAlert()
            return this.setState({video: null})
        }}
         loop={true}
         paused={false}
         position={[0, 0, -5]}
         scale={[2, 2, 0]}
         volume={1.0}
       />
       }

       </ViroARScene>

    );
  }
}

const mapState = ({inventory}) => ({inventory})

export default connect(mapState)(ARrender)

module.exports = ARrender
