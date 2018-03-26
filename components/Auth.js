import React, { Component } from 'react';
import { View, TouchableHighlight, TextInput, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { createUser, fetchUser } from '../store';
import styles from './styles';

export class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      message: '',
      user: null
    };

    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleSignup() {
    this.setState({ message: '' });
    const { email, password } = this.state
    if ( !this.state.email || !this.state.password) {
      this.setState({ message: 'All fields required!' });
    } else {
      this.setState({ message: '' })
      this.props.createUser({ email, password });
      this.props.navigation.navigate('Profile');
    }
  }

  handleLogin() {
    this.setState({ message: '' });
    const { email, password } = this.state
    this.props.fetchUser({ email, password })
    .then(user => this.setState({user: user}))
    .then(() => {
      if (!this.state.user){
      this.setState({message: 'User not found'})
    } else {
      this.setState({message: ''})
      this.props.navigation.navigate('Profile')
      }
    })
  }

render() {
  //console.log(this.state.user)
return (
  // image used from http://
  <Image source={require('../assets/img/loginbkg.jpg')}
  style={styles.backgroundImage}>
   <Text style={styles.title}>Build and Go!</Text>
      <View style={styles.container}>
        <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={text => this.setState({ email: text.trim() })}
        />
        <TextInput
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
