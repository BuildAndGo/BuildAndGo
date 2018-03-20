const serverUrl = "https://build-and-go.herokuapp.com";

const GET_ALL_PARTS = 'GET_ALL_PARTS';

const getAllParts = parts => ({ type: GET_ALL_PARTS, parts });

export default (parts = [], action) => {
  switch (action.type) {
    case GET_ALL_PARTS:
      return action.parts
    default:
      return parts
  }
}

export const fetchParts = () => {
  fetch(`${serverUrl}/api/parts`)
  .then(res => res.json())
  .then(parts => dispatch(getAllParts(parts)))
  .catch(err => console.error('error fetching parts', err))
}
