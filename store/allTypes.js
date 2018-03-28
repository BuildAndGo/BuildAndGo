import axios from 'axios';
const serverUrl = "https://build-and-go.herokuapp.com";

//Action Types
const GET_ALL_TYPES = 'GET_ALL_TYPES';

//Action Creators
const getAllTypes = allTypes => ({ type: GET_ALL_TYPES, allTypes });

//Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_TYPES:
    //  console.log(action, state)
      return action.allTypes
    default:
      return state
  }
}


//Thunks
export const fetchTypes = () => dispatch => {
  axios.get(`${serverUrl}/api/types`)
  .then(res => res.data)
  .then(types => dispatch(getAllTypes(types)))
  .catch(err => console.error('error fetching types', err))
}
