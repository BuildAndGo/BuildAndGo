import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Inventory from "./Inventory";
import { ViroSceneNavigator } from 'react-viro'

var sharedProps = { apiKey: "C137FAFA-F8C2-4D21-AD2E-CC1DDE574BE3" };

export default class CompleteCar extends React.Component {


  render() {

    return (
      <View style={styles.container}>

        <Text>You built your car!</Text>


        <Inventory />


        <TouchableOpacity style={styles.button}
          onPress={ () => this.props.navigation.navigate('Racing') }
        >
          <Text>Start Racing</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.button2}
          onPress={ () => { this.props.navigation.navigate('Searching')}}
        >
          <Text>Build a New Car</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.button3}
          onPress={ () => { this.props.navigation.navigate('Profile')}}
        >
          <Text>See My Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
