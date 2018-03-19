import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  ViroARScene,
  ViroText,
} from 'react-viro';

import merc from 'mercator-projection'

export default class GeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      x: null,
      y: null
    };
    this._onInitialized = this._onInitialized.bind(this);
  }

//using the RN geolocation object to get the user's latitude & longitude upon sign-in
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 5 }
    );
  }
  //now converting that latitude & longitude into the ViroAR 3D plane:
  _onInitialized() {
      let devicePos = merc.fromLatLngPoint({lat: this.state.latitude, lng: this.state.longitude})
      this.setState({
        x: devicePos.x,
        y: devicePos.y
      })
  }


  render() {
    return (
      <ViroARScene style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ViroText>Latitude {this.state.latitude}</ViroText>
        <ViroText>Longitude {this.state.longitude}</ViroText>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </ViroARScene>
    )
  }
}
