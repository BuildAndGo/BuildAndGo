import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Inventory from "./Inventory";
import { ViroSceneNavigator } from "react-viro";

var sharedProps = { apiKey: "C137FAFA-F8C2-4D21-AD2E-CC1DDE574BE3" };
var FirstScene = require("./2DRacing");

export default class CompleteCar extends React.Component {
  constructor() {
    super();
    this.state = {
      sharedProps: { apiKey: "C137FAFA-F8C2-4D21-AD2E-CC1DDE574BE3" },
      type: "completeCar"
    };

    this._getVideo = this._getVideo.bind(this);
    this._comepleteCar = this._comepleteCar.bind(this);
    this._videoOrCar = this._videoOrCar.bind(this);
  }

  _getVideo() {
    return (
      <ViroSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: FirstScene }}
        viroAppProps={this.props.navigation}
      />
    );
  }

  _comepleteCar() {
    return (
      <View style={styles.container}>
        <Text>You built your car!</Text>
        <Image source={require('../assets/car.png')}/>
        <Inventory />

        <TouchableOpacity
        style={styles.button}
        onPress={this._videoOrCar('video')}>
          <Text>Start Racing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.props.navigation.navigate("Searching");
          }}
        >
          <Text>Build a New Car</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.props.navigation.navigate("Profile");
          }}
        >
          <Text>See My Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _videoOrCar(type) {
    return () => {
      this.setState({
        type: type
      });
    };
  }

  render() {
    if (this.state.type == "completeCar") {
      return this._comepleteCar();
    } else if (this.state.type == "video") {
      return this._getVideo();
    }
  }
}
