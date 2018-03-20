//Need to modify for auth

const serverUrl = "https://build-and-go.herokuapp.com";

const GET_CURRENT_USER = 'GET_CURRENT_USER';

const getCurrentUser = user => ({ type: GET_CURRENT_USER, user });

export default function (currentUser = {}, action) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return action.user;
    default:
      return currentUser;
  }
}

export const fetchCurrentUser = id => dispatch => {
  fetch(`${serverUrl}/api/users/${id}`)
  .then(res => res.json())
  .then(user => dispatch(getCurrentUser(user)))
  .catch(err => console.error(`error fetching user: ${id}`, err))
};

// export const me = () => dispatch => {
//   axios.get('/auth/me')
//   .then(res => {
//     dispatch(getCurrentUser(res.data || {}));
//   })
//   .catch(err => console.log(err))
// }

// export const auth = (email, password, method) => dispatch => {
//   axios.post(`/auth/${method}`, { email, password })
//   .then(res => {
//     dispatch(getCurrentUser(res.data))
//     }, authError => { // rare example: a good use case for parallel (non-catch) error handler
//     dispatch(getCurrentUser({error: authError}))
//   })
//   .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))
// }

// export const logout = () =>
//   dispatch =>
//     axios.post('/auth/logout')
//       .then(_ => {
//         dispatch(removeUser());
//       })
// .catch(err => console.log(err))
