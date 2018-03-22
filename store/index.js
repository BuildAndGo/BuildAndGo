import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allParts from './allParts';
import allTypes from './allTypes';
import user from './user';
import currentInventory from './currentInventory';
import currentPart from './currentPart';

const reducer = combineReducers({
  allParts,
  allTypes,
  user,
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
export * from './user';
export * from './currentInventory';
export * from './currentPart';
