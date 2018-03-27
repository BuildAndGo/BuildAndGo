"use strict";

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import axios from 'axios';
import { ViroARScene, ViroVideo, ViroButton, ViroSceneNavigator } from "react-viro";
import { Provider, connect } from 'react-redux';

import { StackNavigator } from "react-navigation";

class ARrender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: null,
      stopAlert: null,
      inventory: props.arSceneNavigator.viroAppProps.inventory,
      availableParts: [],
      newPart: {},
      found: false,
      isDuplicate: false,
    };

    this._onClick = this._onClick.bind(this);
    this._randomResult = this._randomResult.bind(this)
    this._resultAlert = this._resultAlert.bind(this)
    this.handleDuplicate = this.handleDuplicate.bind(this);
  }

  _onClick(newPart) {
    if (!this.state.inventory.find(part => part.typeId === newPart.typeId)) {
      let { updateInventory } = this.props.arSceneNavigator.viroAppProps;
      updateInventory(newPart, false);
      this.setState({
        inventory: this.state.inventory.concat(newPart),
        newPart: {}
      });
    }
    else if (this.state.inventory.find(part => part.typeId === newPart.typeId && part.id !== newPart.id)) {
      this.setState({
        isDuplicate: true,
        newPart: newPart
      });
    }
    // this.setState()
  }

  handleDuplicate(part, replace) {
    let { updateInventory } = this.props.arSceneNavigator.viroAppProps;
    if (replace) {
      updateInventory(part, true);
    }
    this.setState({
      newPart: {},
      isDuplicate: false
    })
  }

  _randomResult() {
    var truthyOrFalsy = Math.floor((Math.random() * 2));
    if(truthyOrFalsy) return this.props.arSceneNavigator.viroAppProps.navigate("Winner")
    else return this.props.arSceneNavigator.viroAppProps.navigate("Loser")
  }

  _resultAlert(){

    Alert.alert(
      'Race Complete!',
      'View the result!',
      [
        {text: 'cancel', style: 'cancel'},
        {text: 'Who Won?', onPress: this._randomResult},
      ],
      { cancelable: false }
    )
  }

  render() {
    let { types, inventory } = this.props.arSceneNavigator.viroAppProps;

    return (
       <ViroARScene>
      { console.warn(this.state.inventory.length) }

       {
         types && types.map(type => {
           let part = type.parts[0];
           part['x'] = Math.random() * 10 - 5;
           part['y'] = -0.5;
           part['z'] = Math.random() * -12 + 6;
           return (
             <ViroButton
             key={part.id}
             source={{uri: part.image}}
             position={[part.x, part.y, part.z]}
             height={2}
             width={3}
             onClick={() => {
               this._onClick(part);
              //  this.visible = false;
              } }
             onDrag={() => {}}
           />
           )
         })
       }

       {
         this.state.isDuplicate && Object.keys(this.state.newPart).length &&
         Alert.alert(
          `Do you want to replace your current ${this.state.newPart.type.name} with ${this.state.newPart.name}?`,
          [
            {text: 'No', style: 'cancel', onPress: () => this.handleDuplicate(this.start.newPart, false)},
            {text: 'Yes', onPress: () => this.handleDuplicate(this.state.newPart, true) },
          ],
          { cancelable: false }
        )
       }

       {
         this.state.inventory.length === types.length &&
         this.state.stopAlert === null &&
         Alert.alert(
          'You collected all parts for your car!',
          'See your Inventory',
          [
            // { text: 'Inventory', onPress: () => this.props.arSceneNavigator.viroAppProps.navigate('CompleteCar') },
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
            return this.setState({ video: null })
        }}
         loop={false}
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

module.exports = ARrender
