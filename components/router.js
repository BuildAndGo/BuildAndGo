// StackNavigator helps navigating components and we will use
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// List of Component
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import Racing from './2DRacing'
import Searching from './3DSearching'
import Winner from './Winner'
import Loser from './Loser'
import ARrender from './ARrender'
import Inventory from './Inventory';

export const RootStack = StackNavigator({
 Login : {
   screen: Login
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
 ARrender: {
   screen: ARrender
 },
 Inventory: {
   screen: Inventory
 }
})
