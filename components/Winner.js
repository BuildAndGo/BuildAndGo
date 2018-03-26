import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { ViroARSceneNavigator } from 'react-viro'
import styles from "./styles";
var FirstScene = require("./2DRacing");

export default class Winner extends React.Component {
  constructor(){
    super()

    this.state = {
      sharedProps: { apiKey: "C137FAFA-F8C2-4D21-AD2E-CC1DDE574BE3" },
      type: 'winner'
    }

    this._getVideo = this._getVideo.bind(this)
    this._showWinner = this._showWinner.bind(this)
  }

  _getVideo() {
    return (
      <ViroARSceneNavigator
        { ...this.state.sharedProps}
        initialScene={{ scene: FirstScene }}
        viroAppProps={this.props.navigation}
      />
    );
  }

  _showWinner() {
    return (
      <Image
      source={require("../assets/winner.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>

        <View>
          <Text style={styles.raceTitle}>Congratulations!</Text>
          <Text style={styles.raceMessage}>You Won the Race.</Text>
          <Text style={styles.raceMessage}>Do you want to play again?</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Searching")}
          >
            <Text>Build a Car</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={ () => this.setState({type: 'video'})}
          >
            <Text>Race your car</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Image>
    )
  }

  render() {
    if(this.state.type === 'winner') return this._showWinner()
    else if(this.state.type === 'video') return this._getVideo()
  }
}
