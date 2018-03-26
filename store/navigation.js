// import {
//   StackNavigator,
//   addNavigationHelpers,
// } from 'react-navigation';
// import {
//   createStore,
//   applyMiddleware,
//   combineReducers,
// } from 'redux';
// import {
//   createReduxBoundAddListener,
//   createReactNavigationReduxMiddleware,
// } from 'react-navigation-redux-helpers';
// import { Provider, connect } from 'react-redux';
// import React from 'react';

// export const AppNavigator = StackNavigator(AppRouteConfigs);

// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'))

// export const navReducer = (state = initialState, action) => {
//   const nextState = AppNavigator.router.getStateForAction(action, state);

//   return nextState || state;
// }
