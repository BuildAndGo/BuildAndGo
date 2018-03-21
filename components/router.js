// StackNavigator helps navigating components and we will use
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// List of Component
import Auth from './Auth'
import Profile from './Profile'
import Racing from './2DRacing'
import Searching from './3DSearching'
import Winner from './Winner'
import Loser from './Loser'
import ARrender from './ARrender'
import PartsNearby from './PartsNearby'

export const RootStack = StackNavigator({
 Augh: {
   screen: Auth
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
 PartsNearby: {
  screen: PartsNearby
 }
})
