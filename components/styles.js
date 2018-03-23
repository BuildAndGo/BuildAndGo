import React from 'react';
import {StyleSheet} from 'react-native';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    padding: 10,
    top: 400,
    position: 'absolute'
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    padding: 10,
    top: 450,
    position: 'absolute'
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    padding: 10,
    top: 500,
    position: 'absolute'
  },
  tagLine: {
    alignItems: 'center',
    color: '#FFFFFF',
    opacity: 0.9,
    padding: 10,
    top: 350,
    position: 'absolute'
  },

  text: {
    color: '#3f348c',
    fontFamily: 'Arial'
  },
  containerInput: {
    width: '90%'
  },
  input: {
    height: 35,
    backgroundColor: 'rgba(192,192,192,0.3)',
    marginBottom: 25,
    width: '90%'
  },
  containerButtonTop: {
    padding: 10,
    width: '100%',
    marginTop: 60
  },
  containerButton: {
    height: 60,
    width: 40,
    marginTop: 20,
    backgroundColor: '#474787',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelContainerStyle: {
    marginTop: 8
  },
  formContainer: {
    padding: 10
  },
  message: {
    color: '#FF5252',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 20
  }
})

export default styles
