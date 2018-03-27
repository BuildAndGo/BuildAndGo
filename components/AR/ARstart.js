import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight
} from "react-native";
import { StackNavigator } from "react-navigation";
// we have this prop =>  this.props.navigation.navigate('another screen')
import { ViroSceneNavigator, ViroARSceneNavigator } from "react-viro";
import { connect } from 'react-redux'
import { fetchCurrentInventory, fetchTypes, updateInventory, postToInventory } from '../../store'
// import { fetchCurrentInventory, fetchTypes, updateInventory } from '../../store'


var sharedProps = { apiKey: "C137FAFA-F8C2-4D21-AD2E-CC1DDE574BE3" };
var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";

class Searching extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: UNSET,
      sharedProps: sharedProps
    };
    this.updateInventory = this.updateInventory.bind(this);
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._exitViro = this._exitViro.bind(this);
  }

 componentDidMount() {
    this.props.fetchCurrentInventory(this.props.user.id);
    this.props.fetchTypes();
  }

  updateInventory(part, replace) {
    if (replace) {
      this.props.updateInventory(this.props.user.id, part);
    }
    else {
      this.props.postToInventory(this.props.user.id, part);
    }
  }

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {

    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.titleText}>Are You Ready??</Text>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={"#ffffff"}
          >
            <Text style={localStyles.buttonText}>Start!</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={localStyles.buttons}
            onPress={()=>this.props.navigation.navigate('Profile')}
            underlayColor={"#ffffff"}
          >
            <Text style={localStyles.buttonText}>Profile</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    let sceneProps = {
      navigation: this.props.navigation,
      inventory: this.props.currentInventory,
      types: this.props.allTypes,
      updateInventory: this.updateInventory
    }
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: require("./ARrender") }}
        viroAppProps={ sceneProps }
      />
    );
  }

  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET
    });
  }
}

const mapState = ({ user, allTypes, currentInventory }) => ({ user, allTypes, currentInventory })
const mapDispatch = { fetchTypes, fetchCurrentInventory, updateInventory, postToInventory }
// const mapDispatch = { fetchTypes, fetchCurrentInventory, updateInventory }

export default connect(mapState, mapDispatch)(Searching)

// module.exports = Searching

// const mapState = ({user, currentInventory}) => ({user, currentInventory})
// const mapDispatch = {fetchCurrentInventory}

// export default connect(mapState, mapDispatch)(Searching)

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black"
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "#ffffff",
    textAlign: "center",
    fontSize: 30,
    fontFamily: 'fasterone_regular'
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'PaytoneOne-Regular'
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, .9)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff"
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#000000",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    fontFamily: 'PaytoneOne-Regular'
  }
});
