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
      types: [],
      availableParts: [],
      newPart: {},
      found: false,
    };

    this._onClick = this._onClick.bind(this);
    this._randomResult = this._randomResult.bind(this)
    this._resultAlert = this._resultAlert.bind(this)
  }

  componentDidMount() {
    const { types } = this.props.arSceneNavigator.viroAppProps;
    this.setState({
      types: types.map(type => {
        let part = type.parts[0];
        part['x'] = Math.random() * 16;
        part['y'] = Math.random() * (-6 - 0.5) + (-0.5);
        part['z'] = Math.random() * (20 - (-20)) + (-20);
        return ({
          id: part.id,
          type: part.typeId,
          button: <ViroButton
          key={part.id}
          source={{uri: part.image}}
          position={[part.x, part.y, part.z]}
          height={2}
          width={3}
          transformBehaviors="billboard"
          onClick={() => this._onClick(part) }
          onDrag={() => {}}
        />
        })
      })
    })
  }

  _onClick(newPart) {
    if (!this.state.inventory.find(part => part.typeId === newPart.typeId)) {
      let { updateInventory } = this.props.arSceneNavigator.viroAppProps;
      updateInventory(newPart, false);
      this.setState({
        inventory: this.state.inventory.concat(newPart),
        newPart: {},
      });
    }
    else if ( this.state.inventory.findIndex(part => (part.typeId === newPart.typeId) && (part.id !== newPart.id)) !== -1 ) {
      this.setState({
        newPart: newPart,
      });
    }
    this.setState({
      types: this.state.types.filter(part => part.id !== newPart.id)
    })
  }

  _randomResult() {
    var truthyOrFalsy = Math.floor((Math.random() * 2));
    if(truthyOrFalsy) return this.props.arSceneNavigator.viroAppProps.navigation.navigate("Winner")
    else return this.props.arSceneNavigator.viroAppProps.navigation.navigate("Loser")
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
    let { types, inventory } = this.state;
    let allTypes = this.props.arSceneNavigator.viroAppProps.types;
    return (
       <ViroARScene>
        {
          this.state.types.map(part => part.button)
        }

        {
          this.state.inventory.length === allTypes.length &&
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
            return this.setState({ video: null })
        }}
         loop={false}
         paused={false}
         position={[0, 0, -5]}
         scale={[3, 3, 0]}
         volume={1.0}
       />
       }
       </ViroARScene>
    );
  }
}

module.exports = ARrender
