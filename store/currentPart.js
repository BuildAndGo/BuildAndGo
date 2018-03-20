
const serverUrl = "https://build-and-go.herokuapp.com";

const GET_CURRENT_PART = 'GET_CURRENT_PART';

export const getCurrentPart = part => ({ type: GET_CURRENT_PART, part });

export default (currentPart = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_PART:
      return action.part;
    default:
      return currentPart;
  }
};

export const fetchCurrentPart = id => dispatch => {
    fetch(`${serverUrl}/api/parts/${id}`)
    .then(res => res.json())
    .then(part => dispatch(getCurrentPart(part)))
    .catch(err => console.error(`error fetching part id: ${id}`, err))
};
