const serverUrl = "https://build-and-go.herokuapp.com";

//Action Types
const GET_ALL_TYPES = 'GET_ALL_TYPES';

//Action Creators
const getAllTypes = types => ({ type: GET_ALL_TYPES, types });

//Reducer
export default (types = [], action) => {
  switch (action.type) {
    case GET_ALL_TYPES:
      return action.types
    default:
      return types
  }
}

//Thunks
export const fetchTypes = () => {
  fetch(`${serverUrl}/api/types`)
  .then(res => res.json())
  .then(types => dispatch(getAllTypes(types)))
  .catch(err => console.error('error fetching types', err))
}
