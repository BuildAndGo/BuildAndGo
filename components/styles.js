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
    justifyContent: 'center',
    alignItems: 'center',
  },
  inventoryContainer: {
    padding: 150,
    backgroundColor: 'rgba(0,0,0, .8)'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, .85)',
    padding: 10,
    top: 400,
    position: 'absolute'
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, .85)',
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
    color: '#FF5252',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 20
  },
  btnText: {
    fontSize: 20, 
    color: '#000000',
    fontFamily: 'PaytoneOne-Regular'
  },
  title: {
    fontSize: 30, 
    color: '#ffffff', 
    top: 100,
    textAlign: 'center',
    fontFamily: 'FasterOne-Regular'
  },
  inventoryTitle: {
    fontSize: 20, 
    top: -70,
    color: '#ffffff', 
    fontWeight: 'bold',
  },
   inventory: {
    fontSize: 15, 
    color: '#ffffff', 
    top: -50,
    fontWeight: 'bold',
  },
  stillNeededTitle: {
    fontSize: 20, 
    top: -20,
    color: '#ffffff', 
    fontWeight: 'bold',
  },
  titleProfile: {
    fontSize: 20, 
    color: '#ffffff', 
    fontWeight: 'bold',
    top: 90,
    textAlign: 'center'
  }
})

export default styles;

