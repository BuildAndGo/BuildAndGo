import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux'
import { fetchTypes } from '../store'


class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchTypes();
  }

  render() {
    let email = this.props.user.email
    return (
    <Image
      source={require('../assets/img/loginbkg.jpg')}
      style={styles.backgroundImage}>
      <TouchableOpacity
          style={styles.logout}
          onPress={() => this.props.navigation.navigate('Auth')}>
          <Text style={styles.logoutTxt}>Log Out</Text>
      </TouchableOpacity>


       {this.props.user && this.props.user.email ? <Text style={styles.titleProfile}>Welcome To Build And Go, {email.substr(0, email.indexOf('@'))}!</Text> : <Text>...</Text>}
          <View style={styles.container}>


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
const mapDispatch = { fetchTypes }

export default connect(mapState, mapDispatch)(Profile);

