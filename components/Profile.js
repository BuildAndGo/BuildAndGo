import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from "./styles";
import { connect } from 'react-redux'
import { fetchCurrentInventory } from '../store'


class Profile extends React.Component {

  render() {
    return (
  
        <Image source={require('../assets/img/loginbkg.jpg')} 
      style={styles.backgroundImage}>
       {this.props.user && this.props.user.email ? <Text style={styles.titleProfile}>Welcome To Build And Go, {this.props.user.email}!</Text> : <Text>...</Text>}
       <View style={styles.container}>
      <View style = {styles.instructionsContainer}>
          <Text style= {styles.instructions}>Hit "Start Searching" to gather car parts and "View Inventory" to see parts you already own. 
          {"\n"}{"\n"}Once you have build your own car, you can race others on the track by hitting "Start Racing".</Text>
          <Text style = {styles.instructionsGo}> 1..2..3..Go!</Text>
          </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Searching', {user: this.props.user})}
        >
          <Text style={styles.btnText} >Start Searching</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('Inventory', {user: this.props.user})}
        >
          <Text style={styles.btnText}>View Inventory</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => this.props.navigation.navigate('Racing')}
        >
          <Text style={styles.btnText}>Start Racing</Text>
        </TouchableOpacity>
        </View>
        </Image>
 

    );
  }
}

const mapState  = ({ user }) => ({ user })

export default connect(mapState)(Profile);

