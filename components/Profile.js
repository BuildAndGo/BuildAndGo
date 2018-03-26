import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from "./styles";
import { connect } from 'react-redux'
import { fetchTypes } from '../store'


class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchTypes();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.user && this.props.user.email ? <Text>Welcome To Build And Go, {this.props.user.email}!</Text> : <Text>...</Text>}

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Searching', {user: this.props.user})}
        >
          <Text>Start Searching</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('Inventory', {user: this.props.user})}
        >
          <Text>View Inventory</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => this.props.navigation.navigate('Racing')}
        >
          <Text>Start Racing</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapState  = ({ user }) => ({ user })
const mapDispatch = { fetchTypes }

export default connect(mapState, mapDispatch)(Profile);

