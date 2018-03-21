import axios from 'axios';
const serverUrl = 'https://build-and-go.herokuapp.com';

const LOGIN_USER = 'LOGIN_USER';
const SIGNUP_USER = 'SIGNUP_USER';
const REMOVE_USER = 'REMOVE_USER';
const EDIT_USER = 'EDIT_USER';

const loginUser = user => ({type: LOGIN_USER, user})
const signupUser = user => ({type: SIGNUP_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const editUser = user => ({type: EDIT_USER, user})


export default function (user = {}, action) {
  switch (action.type) {

    case LOGIN_USER:
      return action.user;

    case SIGNUP_USER:
      return action.user;

    case REMOVE_USER:
      return {};

    case EDIT_USER:
      return action.user;

    default:
      return user;
  }
}

export const fetchUser = user => dispatch => {
  axios.get(`${serverUrl}/auth/login}`, user)
  .then(res => res.data)
  .then(userData => dispatch(loginUser(userData)))
  .catch(err => console.error(`error fetching user: ${user.id}`, err))
};

export const createUser = user => dispatch => {
  axios.get(`${serverUrl}/auth/signup`, user)
  .then(res => res.data)
  .then(userData => dispatch(signupUser(userData)))
  .catch(err => console.error('error creating user', err))
}

export const logout = () =>
  dispatch =>
    axios.post(`${serverUrl}/auth/logout`)
      .then(_ => {
        dispatch(removeUser());
      })
.catch(err => console.log(err))

export const updateUser = (userId, edits) => dispatch => {
  axios.put(`${serverUrl}/api/users/userId`, edits)
  .then(res => res.data)
  .then(userData => dispatch(editUser(userData)))
  .catch(err => console.error(`error updating user: ${userId}`, err))
}
