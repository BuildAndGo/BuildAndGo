"use strict";

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { StackNavigator } from "react-navigation";

import { ViroARScene, Viro3DObject, ViroButton, ViroSceneNavigator } from "react-viro";
import { connect } from 'react-redux'
import { fetchParts } from '../../store'


var carbody = require("../../assets/tire.png")
var red = require("../../assets/red.png")
var tire = require('../../assets/carbody.png')

class ARrender extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      inventory: [],
      parts: []
    };

    // bind 'this' to functions
    this._onClick = this._onClick.bind(this);
  }
  componentDidMount(){
    this.setState({ parts: [carbody, red, tire], inventory: [] })
    //this.props.fetchParts()
  }

  _onClick() {
    var array = this.state.parts;
    var out = array.splice(0, 1);
    this.setState({parts: array, inventory: [...this.state.inventory, out] })

    // this.props.sceneNavigator.jump('Inventory', {
    //   scene: require('./Inventory')
    // })
    //this.props.sceneNavigator.push({scene:require('./Inventory')});

  }


  render() {
 this.props.parts && console.warn(this.props.parts)
    return (


      // this.props.navigation.navigation.navigate('Inventory')

      //  :
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
           var x = Math.floor(Math.random() * 2);
           var y = Math.floor(Math.random() * 5)
           var z = Math.floor(Math.random() * -8)
           return (
             <ViroButton
             key={i}
             source={part}
             position={[x,y,z]}
             height={2}
             width={3}
             onClick={this._onClick}
             onDrag={()=>{}}
           />
           )
         })
       }

       {
         this.state.inventory.length === 3 &&
         Alert.alert(
          'You collected all the parts for your car!',
          'See your Inventory',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Inventory', onPress: () => console.log('hi')},
          ],
          { cancelable: false }
        )
       }

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

const mapState = (state) => {
  return {
    parts: state.parts
  }
}

const mapDispatch = dispatch => {
  fetchParts: () => dispatch(fetchParts())
}

module.exports = connect()(ARrender)

//module.exports = ARrender;
