"use strict";

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import axios from 'axios';
import { ViroARScene, ViroVideo, ViroButton, ViroSceneNavigator } from "react-viro";
import { Provider, connect } from 'react-redux';
// import { updateInventory } from '../../store'

// let tire = require('../../assets/tire.png')
// let red = require('../../assets/red.png')
// let frame = require('../../assets/frame.png')
// let engine = require('../../assets/engine.png')

import { StackNavigator } from "react-navigation";



class ARrender extends Component {
  constructor() {
    super();

    this.state = {
      lclInventory: [],
      video: null,
      stopAlert: null,

      // parts: [frame, red, tire, engine],
      // parts: [
      // {id: 1, type: frame, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6},
      // {id: 2, type: red, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6},
      // {id: 3, type: tire, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6},
      // {id: 4, type: engine, x: Math.random() * 10 - 5, y: -0.5, z: Math.random() * -12 + 6}],
      parts: [],
      found: false
    };

    this._onClick = this._onClick.bind(this);
    this._randomResult = this._randomResult.bind(this)
    this._resultAlert = this._resultAlert.bind(this)
  }

  componentDidMount() {
    // axios.get('https://build-and-go.herokuapp.com/api/types')
    // .then(res => this.setState({ parts: res.data }));
  }

  _onClick(part) {
    axios.put(`${serverUrl}/api/users/${userId}/inventory`, edits)
  .then(res => res.data)
  .then(inventory => dispatch(editInventory(inventory)))
  .catch(err => console.error(`error updating inventory for: ${userId}`, err))
    // let array = this.state.parts;
    // let out = array.splice(array.indexOf(part), 1)
    // this.setState({ parts: array, lclInventory: [...this.state.lclInventory, out] })
    // updateInventory(this.props.user.id, this.lclInventory)
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
      // console.warn(this.props.currentInventory && this.props.currentInventory.length ? 'broccoli' + this.props.currentInventory : 'cats')
    let { types, inventory } = this.props.arSceneNavigator.viroAppProps;

    return (
       <ViroARScene>
      { console.warn(types[0].image) }

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
             onClick={() => this._onClick(part.type)}
             onDrag={() => {}}
           />
           )
         })
       }

       {
         this.state.lclInventory.length === 2 &&
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

// const mapState = ({ user, allTypes, currentInventory }) => ({ user, allTypes, currentInventory })
// const mapDispatch = { updateInventory }

// export default connect(mapState, mapDispatch)(ARrender)

module.exports = ARrender
