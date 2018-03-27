import axios from 'axios';
const serverUrl = 'https://build-and-go.herokuapp.com';


const GET_CURRENT_INVENTORY = 'GET_CURRENT_INVENTORY';
const EDIT_INVENTORY = 'EDIT_INVENTORY';
const ADD_TO_INVENTORY = 'ADD_TO_INVENTORY';

export const getCurrentInventory = inventory => ({ type: GET_CURRENT_INVENTORY, inventory });
export const editInventory = part => ({ type: EDIT_INVENTORY, part });
export const addToInventory = part => ({ type: ADD_TO_INVENTORY, part })

export default (currentInventory = [], action) => {
  switch (action.type) {
    case GET_CURRENT_INVENTORY:
      return action.inventory;
    case EDIT_INVENTORY:
      return currentInventory.map(part => action.part.typeId === part.typeId ? action.part : part );
    case ADD_TO_INVENTORY:
      return [ ...currentInventory, action.part];
    default:
      return currentInventory;
  }
};

export const fetchCurrentInventory = userId => dispatch => {
    axios.get(`${serverUrl}/api/users/${userId}/inventory`)
    .then(res => res.data)
    .then(parts => {
      dispatch(getCurrentInventory(parts))
      console.log(parts);
    })
    .catch(err => console.error(`error fetching inventory for user id: ${userId}`, err))
};

export const updateInventory = (userId, edits) => dispatch => {
  axios.put(`${serverUrl}/api/users/${userId}/inventory`, edits)
  .then(res => res.data)
  .then(newPart => dispatch(editInventory(newPart)))
  .catch(err => console.error(`error updating inventory for: ${userId}`, err))
};

export const postToInventory = (userId, newPart) => dispatch => {
  axios.post(`${serverUrl}/api/users/${userId}/inventory`, newPart)
  .then(res => res.data)
  .then(newPart => dispatch(addToInventory(newPart[0])))
  .catch(err => console.error(`error updating inventory for: ${userId}`, err))
}
