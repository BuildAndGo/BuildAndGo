
const serverUrl = "https://build-and-go.herokuapp.com";

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

export const fetchCurrentInventory = id => dispatch => {
    fetch(`${serverUrl}/api/inventories/${id}`)
    .then(res => res.json())
    .then(inventory => dispatch(getCurrentInventory(inventory)))
    .catch(err => console.error(`error fetching inventory id: ${id}`, err))
};
