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
      isDuplicate: false,
    };

    this._onClick = this._onClick.bind(this);
    this._randomResult = this._randomResult.bind(this)
    this._resultAlert = this._resultAlert.bind(this)
    this.handleDuplicate = this.handleDuplicate.bind(this);
  }

  componentDidMount() {
    const { types } = this.props.arSceneNavigator.viroAppProps;
    this.setState({
      types: types.map(type => {
        let part = type.parts[0];
        // let zOptions = [Math.random() * (24 - (-24)) + (-24)), (Math.random() * (6 - 2) + 2)];
        // let zOptions = [Math.random() * (24 - (-24)) + (-24)), (Math.random() * (6 - 2) + 2)];

        part['x'] = Math.random() * 16;
        part['y'] = Math.random() * (-6 - 0.5) + (-0.5);
        part['z'] = Math.random() * (20 - (-20)) + (-20);
        // part['z'] = Math.random() * ;
        // part['z'] = Math.random() * -12 + 12;
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
        isDuplicate: true,
        newPart: newPart,
      });
    }
    this.setState({
      types: this.state.types.filter(part => part.id !== newPart.id)
    })
  }

  handleDuplicate(part, replace) {
    let { updateInventory } = this.props.arSceneNavigator.viroAppProps;
    if (replace) {
      updateInventory(part, true);
    }
    this.setState({
      newPart: {},
      isDuplicate: false,
      stopAlert: true
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
      {/* { this.state.inventory.length ? console.warn(this.state.inventory.length) : null} */}
      { Object.keys(this.state.newPart).length ? console.warn(this.state.newPart.name) : null}
       {
        //  types && types.map(type => {
        //    let part = type.parts[0];
        //    part['x'] = Math.random() * 10 - 5;
        //    part['y'] = -0.5;
        //    part['z'] = Math.random() * -12 + 6;
        //    return (
        //       <ViroButton
        //       key={part.id}
        //       source={{uri: part.image}}
        //       position={[part.x, part.y, part.z]}
        //       height={2}
        //       width={3}
        //       onClick={() => {
        //         this._onClick(part);
        //         // this.visible = false;
        //       }}
        //      onDrag={() => {}}
        //    />
        //    )
        //  })
       }

      {
         this.state.types.map(part => part.button)
      }

       {
        //  this.state.isDuplicate &&
        //  Alert.alert(
        //   'Duplicate part found',
        //   'Do you want to replace your current with?',
        //   [
        //     {text: 'No', style: 'cancel', onPress: () => this.handleDuplicate(this.state.newPart, false)},
        //     {text: 'Yes', onPress: () => this.handleDuplicate(this.state.newPart, true) },
        //   ],
        //   { cancelable: false }
        // )
       }

       {
         this.state.inventory.length === allTypes.length &&
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
