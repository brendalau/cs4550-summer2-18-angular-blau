import {Injectable} from '@angular/core';

const LOCALHOST_API_URL = 'https://cs4550-summer2-18-node-blau.herokuapp.com/api';

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch(LOCALHOST_API_URL + '/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  currentUser() {
    return fetch(LOCALHOST_API_URL + '/currentUser', {
      credentials: 'include'
    }).then(response => response.json());
  }

  register = (user) =>
    fetch(LOCALHOST_API_URL + '/register', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  logout = () =>
    fetch(LOCALHOST_API_URL + '/logout', {
      method: 'post',
      credentials: 'include'
  })

  updateUser = (user) =>
    fetch(LOCALHOST_API_URL + '/profile', {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
}
