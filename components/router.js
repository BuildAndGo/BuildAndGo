// StackNavigator helps navigating components and we will use
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// List of Component
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import Racing from './2DRacing'
import Winner from './Winner'
import Loser from './Loser'
//var Searching = require('./AR/ARstart')
import Searching from './AR/ARstart'
//import ARrender from './AR/ARrender'
import Inventory from './Inventory';

export const RootStack = StackNavigator({
 Login : {
   screen: Searching
 },
 Signup: {
   screen: Signup
 },
 Profile: {
   screen: Profile
 },
 Racing: {
   screen: Racing
 },
 Searching: {
   screen: Searching
 },
 Winner: {
   screen: Winner
 },
 Loser: {
   screen: Loser
 },
//  ARrender: {
//    screen: ARrender
//  },
 Inventory: {
   screen: Inventory
 }
})
