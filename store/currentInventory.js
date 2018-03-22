import axios from 'axios';
const serverUrl = 'https://build-and-go.herokuapp.com';


const GET_CURRENT_INVENTORY = 'GET_CURRENT_INVENTORY';

export const getCurrentInventory = inventory => ({ type: GET_CURRENT_INVENTORY, inventory });

export default (currentInventory = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_INVENTORY:
      return action.inventory;
    default:
      return currentInventory;
  }
}

export const fetchCurrentInventory = userId => dispatch => {
    axios.get(`${serverUrl}/api/users/${userId}/inventory`)
    .then(res => res.data)
    .then(parts => {
      dispatch(getCurrentInventory(parts))
      console.log(parts);
    })
    .catch(err => console.error(`error fetching inventory for user id: ${userId}`, err))
};
