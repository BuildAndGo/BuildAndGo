import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allParts from './allParts';
import allTypes from './allTypes';
import currentUser from './currentUser';
import currentInventory from './currentInventory';
import currentPart from './currentPart';

const reducer = combineReducers({
  allParts,
  allTypes,
  currentUser,
  currentInventory,
  currentPart
});

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
));

const store = createStore(reducer, middleware);

export default store;
export * from './allParts';
export * from './allTypes';
export * from './currentUser';
export * from './currentInventory';
export * from './currentPart';
