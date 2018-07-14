import React from "react";
import { Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import { ViroARScene, ViroVideo } from "react-viro";

export default class Racing extends React.Component {
  constructor() {
    super();

    this.state = {
      video: true
    };
    this._randomResult = this._randomResult.bind(this);
    this._resultAlert = this._resultAlert.bind(this);
  }

  _randomResult() {
    var truthyOrFalsy = Math.floor(Math.random() * 2);
    if (truthyOrFalsy) return this.props.arSceneNavigator.viroAppProps.navigate("Winner");
    else return this.props.arSceneNavigator.viroAppProps.navigate("Loser");
  }

  _resultAlert() {
    Alert.alert(
      'Race Complete!',
      'View the result!',
      [
        { text: "cancel", style: "cancel" },
        { text: "Who Won?", onPress: this._randomResult }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <ViroARScene>
        {this.state.video &&
          <ViroVideo
            source={require("../assets/racing.mp4")}
            onFinish={() => {
              this._resultAlert();
              return this.setState({ video: null });
            }}
            loop={false}
            paused={false}
            position={[0, 0, -5]}
            scale={[3, 3, 0]}
            volume={1.0}
          />
        }
      </ViroARScene>
    );
  }
}

module.exports = Racing;
