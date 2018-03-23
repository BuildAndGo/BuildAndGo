import React from "react";
import { View } from "react-native";
import { StackNavigator } from "react-navigation";
import Video from "react-native-video";

export default class Racing extends React.Component {
  render() {
    return (
      <View>
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          repeat
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  }
}
