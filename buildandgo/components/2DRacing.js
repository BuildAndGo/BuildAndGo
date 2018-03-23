import React from "react";
import { View } from 'react-native'
import { StackNavigator } from "react-navigation";
import { ViroARScene, ViroVideo, Viro360Image } from "react-viro";

export default class Racing extends React.Component {
  render() {
    return (
      <View>
        <ViroVideo
          source={require("../assets/racing.mp4")}
          onFinish={() => console.log('hi')
            //this.props.sceneNavigator.viroAppProps.navigate("Profile")
          }
          loop={true}
          paused={false}
          position={[0, 2, -5]}
          scale={[15, 15, 0]}
          volume={1.0}
        />
      </View>
    );
  }
}

module.exports = Racing;
