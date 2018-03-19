'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  Viro3DObject
} from 'react-viro';



export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingInitialized={this._onInitialized} >
        <Viro3DObject source={require('./assets/tire.obj')}
              resources={[require('./assets/tire.mtl')]}
                      position={[0.0, 0.0, -10]}
                      scale={[0.1, 0.1, 0.1]}
                      type="OBJ" />
      </ViroARScene>
    );
  }

  _onInitialized() {
    this.setState({
      text : "Hello World!"
    });
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
