import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { ViroARSceneNavigator } from "react-viro";
import styles from "./styles";
var FirstScene = require("./2DRacing");

export default class Winner extends React.Component {
  constructor() {
    super();

    this.state = {
      sharedProps: { apiKey: "C137FAFA-F8C2-4D21-AD2E-CC1DDE574BE3" },
      type: "loser"
    };

    this._getVideo = this._getVideo.bind(this);
    this._showLoser = this._showLoser.bind(this);
  }

  _getVideo() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: FirstScene }}
        viroAppProps={this.props.navigation}
      />
    );
  }

  _showLoser() {
    return (
      <Image
        source={require("../assets/loser.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container2}>


            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>Fail!</Text>
              <Text style={styles.resultContent}>
                You lost the Race {"\n \n"}
                Try Again!
              </Text>
            </View>


          <View>
            <TouchableOpacity
              style={styles.raceButton}
              onPress={() => this.props.navigation.navigate("Searching")}
            >
              <Text style={styles.btnText}>Build a Car.</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.raceButton}
              onPress={() => this.setState({ type: "video" })}
            >
              <Text style={styles.btnText}>Race your car</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }

  render() {
    if (this.state.type === "loser") return this._showLoser();
    else if (this.state.type === "video") return this._getVideo();
  }
}
