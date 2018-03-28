import React from 'react';
import {StyleSheet} from 'react-native';


 const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
},
  container: {
    flex: 1,
    top: 150,
    alignItems: 'center',
  },
  inventoryBGTitle: {
    fontSize: 20,
     color: '#ffffff',
     top: 40,
    textAlign: 'center',
    fontFamily: 'fasterone_regular'
  },
  inventoryContainer: {
    top: 50,
    padding: 100,
    backgroundColor: 'rgba(0,0,0, .8)'
  },
  inventory: {
    fontSize: 15,
    color: '#ffffff',
    top: -50,
    fontFamily: 'PaytoneOne-Regular'
  },
    inventoryTitle: {
    fontSize: 20,
    top: -70,
    color: '#ffffff',
    fontFamily: 'PaytoneOne-Regular'
  },
  instructionsContainer: {
    backgroundColor: 'rgba(0,0,0, .8)',
    top: -40,
    padding: 20,
    alignItems: 'center',
  },
  instructions: {
    color: '#ffffff',
    fontFamily: 'PaytoneOne-Regular',
    padding: 20,
    top: -20
  },
  instructionsGo: {
    color: '#ffffff',
    fontFamily: 'fasterone_regular',
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, .85)',
    padding: 10,
    top: 200,
    position: 'absolute'
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, .85)',
    padding: 10,
    top: 250,
    position: 'absolute'
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    padding: 10,
    top: 300,
    position: 'absolute'
  },
  logout: {
   top: 5,
   right: 5,
    backgroundColor: 'rgba(255,255,255, .9)',
    padding: 5,
    position: 'absolute'
  },
  logoutTxt: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'PaytoneOne-Regular'
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
    color: '#ffffff',
    fontFamily: 'PaytoneOne-Regular'
  },
  containerInput: {
    width: '90%',
   backgroundColor: 'rgba(255,255,255, .9)'
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255, .325)',
    color: 'rgba(0,0,0,1)',
    marginBottom: 25,
    width: '90%',
    fontSize: 15
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
    fontSize: 25,
    padding: 20,
    backgroundColor: 'rgba(255,255,255, .9)',
    color: 'rgba(228,15,15,1)',
    fontFamily: 'PaytoneOne-Regular'
  },
  btnText: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'PaytoneOne-Regular'
  },
   title: {
     fontSize: 20,
     color: '#ffffff',
     top: 120,
    textAlign: 'center',
    fontFamily: 'fasterone_regular'
  },
    need: {
    fontSize: 15,
    color: '#ffffff',
    fontFamily: 'PaytoneOne-Regular'
  },
  stillNeededTitle: {
    fontSize: 20,
    top: -20,
    color: '#ffffff',
    fontFamily: 'PaytoneOne-Regular'
  },
  titleProfile: {
    fontSize: 20,
    color: '#ffffff',
    top: 80,
    textAlign: 'center',
    fontFamily: 'PaytoneOne-Regular'
  },
  raceMessage: {
    fontSize: 20,
    top: 120,
    margin: 10,
    textAlign: 'center'
  },
  raceTitle: {
    fontSize: 25,
    margin: 10,
    top: 120,
    textAlign: 'center'
  }
});

export default styles;

