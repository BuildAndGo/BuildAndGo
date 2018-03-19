import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Geolocation, { hasLocationPermission } from 'react-native-geolocation-service'


export default class UserLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null
    };
  }

async componentDidMount() {
  const success = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      error: null
    });
  }
  const error = (err) => this.setState({ err: err.message })
  const options = { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }

  await navigator.geolocation.getCurrentPosition(success, error, options)
    }
    // else {
    //   this.setState({
    //     latitude: 40.7050760,
    //     longitude: -74.0091600,
    //     error: null
    //   })
    // }
  //}

  render() {
    return (
      <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
         <Text>Latitude {this.state.latitude}</Text>
         <Text>Longitude {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    )
  }
}
