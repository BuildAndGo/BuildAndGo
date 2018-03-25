import React from "react";
import { StackNavigator } from "react-navigation";
import { ViroARScene, ViroVideo } from "react-viro";

export default class Racing extends React.Component {
  render() {
    return (
      <ViroARScene>

        <ViroVideo
          source={require("../assets/racing.mp4")}
          onFinish={() =>
            this.props.arSceneNavigator.viroAppProps.navigate("Winner")
          }
          loop={true}
          paused={false}
          position={[0, 0, -5]}
          scale={[2, 2, 0]}
          volume={1.0}
        />
      </ViroARScene>
    );
  }
}

module.exports = Racing;
