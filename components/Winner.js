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
      <View style={styles.container2}>

        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Congratulations!</Text>
          <Text style={styles.resultContent}>
          You Won the race. {"\n \n"}
          Do you want to play again?
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.raceButton}
            onPress={() => this.props.navigation.navigate("Inventory")}
          >
            <Text style={styles.btnText}>Inventory</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.raceButton}
            onPress={ () => this.setState({type: 'video'})}
          >
            <Text style={styles.btnText}>Race your car</Text>
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
