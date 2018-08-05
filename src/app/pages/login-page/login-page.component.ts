import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router, private userService: UserServiceClient) { }

  ngOnInit() {
  }

  login = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    this.userService.login(user)
      .then(u => this.router.navigate(['profile']));
  }
}
