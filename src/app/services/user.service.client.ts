import {Injectable} from '@angular/core';

const LOCALHOST_API_URL = 'http://localhost:3000/api';

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

  currentUser = () =>
    fetch(LOCALHOST_API_URL + '/currentUser', {
      credentials: 'include'
    }).then(response => response.json())

  register = (user) =>
    fetch(LOCALHOST_API_URL + '/register', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
}
