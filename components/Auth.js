import React, { Component } from 'react'
import { View, TouchableHighlight, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { createUser, fetchUser } from '../store'
import { StackNavigator } from 'react-navigation';
import styles from './astyles'


export class Auth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      user: undefined
    }

    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleSignup() {
    this.setState({ message: '' })
    const { email, password } = this.state
    if ( !this.state.email || !this.state.password) {
      this.setState({ message: 'All fields required!' })
    } else {
      this.setState({ message: '' })
      this.props.createUser({ email, password })
      this.props.profileNav
        ? this.props.profileNav.navigate('Profile')
        : this.props.navigation.navigate('Profile')
    }
  }

  handleLogin() {
    this.setState({ message: '' })
    const { email, password } = this.state
    this.props
      .getUser({ email, password })
      .then(user => {
        this.setState({ user: user })
      })
      .then(() => {
        if (
          !this.state.user ||
          !this.state.email ||
          !this.state.password
        ) {
          this.setState({ message: 'User not found.' })
        } else {
          this.setState({ message: '' })
          this.props.navigation.navigate('Profile')
        }
      })

}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Build And go!</Text>
        <TextInput
          containerStyle={styles.containerInput}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          containerStyle={styles.containerInput}
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={text => this.setState({ password: text })}
        />
        {this.state.message ? (
          <Text style={styles.message}>{this.state.message}</Text>
        ) : null}
        <TouchableHighlight
          underlayColor={'#f9f5ec'}
          style={styles.button}
          onPress={this.handleLogin.bind(this)}
        >
          <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'#f9f5ec'}
          style={styles.button2}
          onPress={this.handleSignup.bind(this)}
        >
          <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const mapDispatch = { createUser, fetchUser }

export default connect(null, mapDispatch)(Auth)
