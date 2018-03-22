import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default Footer = () => {
  return (
    <View>

    <TouchableOpacity>
      <Text>hi</Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    padding: 10,
    top: 380,
    position: "absolute"
  },
  text: {
    color: "#3f348c",
    fontFamily: "Arial",
  }
});
