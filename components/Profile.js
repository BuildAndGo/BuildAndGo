import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Inventory from "./Inventory";
import styles from "./styles";
<<<<<<< HEAD
import { connect } from 'react-redux'
import { fetchParts } from '../store'
=======
import { connect } from 'react-redux';
>>>>>>> 5ee43717cb61f6a69071431cec216b91238b5dd9


class Profile extends React.Component {


  render() {

    return (
      <View style={styles.container}>
        {this.props.user && this.props.user.email ? <Text>Welcome To Build And Go, {this.props.user.email}!</Text> : <Text>Welcome To Build And Go!</Text>}

        <Inventory />

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


const mapState = state => {
  return {
    user: state.user
  }
}

<<<<<<< HEAD
export const mapDispatchToProps = dispatch => ({
  fetchParts: () => dispatch(fetchParts())
})

export default connect(mapState, mapDispatchToProps)(Profile)
=======
export default connect(mapState)(Profile)
>>>>>>> 5ee43717cb61f6a69071431cec216b91238b5dd9
