import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { fetchTypes, logout } from "../store";

class Profile extends React.Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout();
    this.props.navigation.navigate("Auth")
  }

  componentDidMount() {
    this.props.fetchTypes();
  }


  render() {
    let email = this.props.user.email;
    return (
      <Image
        source={require("../assets/img/loginbkg.jpg")}
        style={styles.backgroundImage}
      >
        <TouchableOpacity style={styles.logout} onPress={this.handleLogout}>
          <Text style={styles.logoutTxt}>Log Out</Text>
        </TouchableOpacity>

        {this.props.user && this.props.user.email ? (
          <Text style={styles.titleProfile}>
            Welcome To Build And Go,{" "}
            {this.props.user.email.substr(0, email.indexOf("@"))}!
          </Text>
        ) : (
          <Text>...</Text>
        )}
        <View style={styles.container}>
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructions}>
              Hit "Start Searching" to find car parts {"\n \n"}Hit "View
              Inventory" to see the parts you've already found
              {"\n"}
              {"\n"}Once you build your car, race others by hitting "Start
              Racing"!
            </Text>
            <Text style={styles.instructionsGo}> 1..2..3..Go!</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("Searching", {
                user: this.props.user
              })
            }
          >
            <Text style={styles.btnText}>Start Searching</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={() =>
              this.props.navigation.navigate("Inventory", {
                user: this.props.user
              })
            }
          >
            <Text style={styles.btnText}>View Inventory</Text>
          </TouchableOpacity>

        </View>
      </Image>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = { fetchTypes, logout };

export default connect(mapState, mapDispatch)(Profile);
