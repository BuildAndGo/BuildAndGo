import React, { Component } from 'react'
import { View, TouchableHighlight, TextInput, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { createUser, fetchUser } from '../store'
import { StackNavigator } from 'react-navigation'
import styles from './styles'




export class Auth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
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
    this.props.fetchUser({ email, password })
    console.log('fetched user')
    this.props.navigation.navigate('Profile')
  }

  render() {
return (
  <Image source={require('../assets/img/loginbkg.jpg')} 
  style={styles.backgroundImage}>
   <Text style={styles.title}>Build and Go!</Text>
      <View style={styles.container}>
        <View style={styles.containerInput}>
        <TextInput
          // containerStyle={styles.containerInput}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor= "#000000"
          autoCapitalize="none"
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          // containerStyle={styles.containerInput}
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor= "#000000"
          autoCapitalize="none"
          onChangeText={text => this.setState({ password: text })}
        />
          </View>
        {this.state.message ? (
          <Text style={styles.message}>{this.state.message}</Text>
        ) : null}
        <TouchableHighlight
          underlayColor={'rgba(255,255,255, .9)'}
          style={styles.button}
          onPress={this.handleLogin}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'rgba(255,255,255, .3)'}
          style={styles.button2}
          onPress={this.handleSignup}
        >
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
      </Image>
    )
  }
}

const mapState = ({ user }) => ({ user })

const mapDispatch = { createUser, fetchUser }

export default connect(mapState, mapDispatch)(Auth)
