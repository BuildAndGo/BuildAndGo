import React from "react";
import { StackNavigator } from "react-navigation";
import { ViroScene, ViroVideo, Viro360Image } from "react-viro";
var Profile = require("./Profile");

export default class Racing extends React.Component {
  render() {
    return (
      <ViroScene>
        <Viro360Image source={require("../assets/driving.jpg")} />
        <ViroVideo
          source={require("../assets/racing.mp4")}
          onFinish={() =>
            this.props.sceneNavigator.viroAppProps.navigate("Profile")
          }
          loop={true}
          paused={false}
          position={[0, 2, -5]}
          scale={[15, 15, 0]}
          volume={1.0}
        />
      </ViroScene>
    );
  }
}

module.exports = Racing;
