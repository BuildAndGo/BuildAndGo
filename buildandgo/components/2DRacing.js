import React from "react";
import { StackNavigator } from "react-navigation";
import { ViroScene, ViroVideo } from "react-viro";

export default class Racing extends React.Component {
  render() {
    //console.error(this.props);
    return (
      <ViroScene>
        <ViroVideo
          source={require("../assets/racing.mp4")}
          onFinish={console.log("hi")}
          //onFinish={this.props.arSceneNavigator.viroAppProps.navigate('CompleteCar')}
          // onUpdateTime={this._onUpdateTime}
          // onError={this._videoError}
          loop={true}
          paused={false}
          position={[0, 2, -5]}
          scale={[2, 2, 0]}
          volume={1.0}
        />
      </ViroScene>
    );
  }
}

module.exports = Racing;
