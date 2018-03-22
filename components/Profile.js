import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Inventory from "./Inventory";
import styles from "./styles";
import { connect } from 'react-redux'
import { fetchCurrentInventory } from '../store'


class Profile extends React.Component {
  componentDidMount() {
    console.log(this.props.user)
    this.props.fetchCurrentInventory(this.props.user.id);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.user && this.props.user.email ? <Text>Welcome To Build And Go, {this.props.user.email}!</Text> : <Text>Welcome To Build And Go!</Text>}
        { Object.keys(this.props.user).length ? <Inventory inventory={this.props.user.parts} /> : null  }


        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Searching")}
        >
          <Text>Start Searching</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate("Racing")}
        >
          <Text>Start Racing</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapState  = ({ user, currentInventory }) => ({ user, currentInventory })

const mapDispatch = { fetchCurrentInventory }

export default connect(mapState, mapDispatch)(Profile);

