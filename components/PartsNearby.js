import React, { Component } from 'react';
import { creatCarParts } from '../utils/randomCarPart'

import {
  StyleSheet,
  PropTypes,
  View,
  Text,
  Image
} from 'react-native'
import MapView from 'react-native-maps'
import { throttle } from 'lodash'


const THROTTLE = 3000

export default class PartsNearby extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mechanic: {
        latitude: 40.7050760,
        longitude: -74.0091600
      },
      carParts: []
    }

    this.renderCarParts = throttle(this.renderCarParts.bind(this), THROTTLE)
    this.onMechanicMoved = this.onMechanicMoved.bind(this)
  }

  onMechanicMoved(mechanic) {
    this.setState({ mechanic })
    this.renderCarParts()
  }

  renderCarParts() {
    const location = this.state.mechanic

    let newCarPart = creatCarParts(5, location)

    if (this.state.carParts.length) {
      newCarPart = newCarPart.concat(this.state.carParts.slice(0, 3))
    }

    this.setState({
      carParts: newCarPart
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          onRegionChange={this.onMechanicMoved}
          showsUserLocation
          followsUserLocation
          scrollEnabled={false}
          showsTraffic={false}
          showsIndoors={false}
          showsPointsOfInterest={false}
        >
          <MapView.Marker
            key={'mechanic'}
            image={require('../img/mechanic.png')}
            coordinate={this.state.mechanic}
          />

          {this.state.carParts.map(parts =>
            <MapView.Marker
              key={`${parts.latitude}::${parts.longitude}`}
              coordinate={parts}
            >
              <Image source={parts.image} />
            </MapView.Marker>
          )}
        </MapView>

        <View style={styles.bubble}>
          <Text style={{ textAlign: 'center'}}>
            {`${this.state.mechanic.latitude.toPrecision(7)}, ${this.state.mechanic.longitude.toPrecision(7)}`}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
})
